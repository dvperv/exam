import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Glyphicon, ListGroup, ListGroupItem } from 'react-bootstrap';
import { withTracker } from 'meteor/react-meteor-data';

import {Groups} from "../../api/collections";

class GroupList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
//TODO Remove Add

    addItem(title){
        // if(! this.props.groups.includes(title))
        //     this.props.groups.push(title);
        // this.props..sort();
    }

    renderItems(){
        return this.props.groups.map((group) => (
            <ListGroupItem key={group._id}>
                {group.title}
                <Button  bsStyle="danger" bsSize="small" className="pull-right">
                    <Glyphicon glyph="remove"/>
                </Button>
            </ListGroupItem>
        ));
    }

    render(){
        return(
            <div>
                <h3>Группы<ButtonGroup className="pull-right">
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

GroupList.propTypes = {
    dept_id: PropTypes.string,
};

export default withTracker(props => {
    // Do all your reactive data access in this method.
    // Note that this subscription will get cleaned up when your component is unmounted
    // const handle = Meteor.subscribe('todoList', props.id);
    Meteor.subscribe('groups');

    return {
        groups: Groups.find({dept_id: props.dept_id}).fetch(),
    };
})(GroupList);