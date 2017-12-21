import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Glyphicon, ListGroup, ListGroupItem } from 'react-bootstrap';
import { withTracker } from 'meteor/react-meteor-data';

import {Depts} from "../../api/collections";

class DeptList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
//TODO Remove Add

    addItem(title){
        if(! this.props.depts.includes(title))
            this.props.deps.push(title);
        this.props.depts.sort();
    }

    renderItems(){
        return this.props.depts.map((dept) => (
            <ListGroupItem key={dept._id} href={"/dept/edit/" + dept._id}>
                {dept.title}
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

DeptList.propTypes = {
    school_id: PropTypes.string,
};

export default withTracker(props => {
    // Do all your reactive data access in this method.
    // Note that this subscription will get cleaned up when your component is unmounted
    // const handle = Meteor.subscribe('todoList', props.id);
    Meteor.subscribe('depts');

    return {
        depts: Depts.find({school_id: props.school_id}).fetch(),
    };
})(DeptList);