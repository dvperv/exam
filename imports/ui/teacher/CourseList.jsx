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
        // if(! this.props.courses.includes(title))
        //     this.props.deps.push(title);
        // this.props.courses.sort();
    }

    renderItems(){
        return this.props.courses.map((item) => (
            <ListGroupItem key={item._id}>
                {item.title}
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
    dept_id: PropTypes.string,
};

export default withTracker(props => {
    // Do all your reactive data access in this method.
    // Note that this subscription will get cleaned up when your component is unmounted
    // Meteor.subscribe('todoList', props.id);
    const handle = Meteor.subscribe('courses');

    return {
        courses: Courses.find({dept_id: props.dept_id}).fetch(),
    };
})(CourseList);