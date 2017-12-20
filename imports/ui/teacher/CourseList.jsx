import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Glyphicon, ListGroup, ListGroupItem } from 'react-bootstrap';
import { withTracker } from 'meteor/react-meteor-data';

import {Courses} from "../../api/collections";

class CourseList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
//TODO Remove Add

    addItem(title){
        if(! this.props.courses.includes(title))
            this.props.deps.push(title);
        this.props.courses.sort();
    }

    renderItems(){
        return this.props.courses.map((course) => (
            <ListGroupItem key={course._id}>
                {course.title}
                <Button  bsStyle="danger" bsSize="small" className="pull-right">
                    <Glyphicon glyph="remove"/>
                </Button>
            </ListGroupItem>
        ));
    }

    render(){
        return(
            <div>
                <h3>Факультеты<ButtonGroup className="pull-right">
                    <Button active onClick={(e) => this.addItem("123")}>
                        <Glyphicon glyph="plus"/>
                    </Button>
                </ButtonGroup></h3>
                <ListGroup>
                    {this.renderItems()}
                </ListGroup>
            </div>
        );
    }
}

CourseList.propTypes = {
    school_id: PropTypes.string,
};

export default withTracker(props => {
    // Do all your reactive data access in this method.
    // Note that this subscription will get cleaned up when your component is unmounted
    // const handle = Meteor.subscribe('todoList', props.id);
    Meteor.subscribe('courses');

    return {
        courses: Courses.find({school_id: props.school_id}).fetch(),
    };
})(CourseList);