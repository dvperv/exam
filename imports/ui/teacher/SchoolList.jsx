import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Button, ButtonGroup, Glyphicon, ListGroup } from 'react-bootstrap';
import { withTracker } from 'meteor/react-meteor-data';

import SchoolItem from './SchoolItem';

import {Schools} from "../../api/collections";

class SchoolList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderItems(){
        return this.props.schools.map((school) => (
            <SchoolItem key={school._id} school={school} />
        ));
    }

    render(){
        //TODO Add Filter
        return(//{this.renderItems}
            <div>
                <h2>Учебные заведения</h2>
                <ButtonGroup className="pull-right">
                    <Button active href="/school/new"><Glyphicon glyph="plus"/></Button>
                </ButtonGroup>
                <ListGroup>
                    {this.renderItems()}
                </ListGroup>
            </div>
        );
    }
}

SchoolList.propTypes = {
    currentUser: PropTypes.object,
    sortByDateTime: PropTypes.number,
    sortByTitle: PropTypes.number,
    sortByTeacher: PropTypes.number,
    sortByCourse: PropTypes.number,
};

export default withTracker(props => {
    // Do all your reactive data access in this method.
    // Note that this subscription will get cleaned up when your component is unmounted
    // const handle = Meteor.subscribe('todoList', props.id);
    Meteor.subscribe('schools');

    return {
        currentUser: Meteor.user(),
        sortByDateTime: -1,
        sortByTitle: 1,
        sortByTeacher: 1,
        sortByCourse: 1,
        schools: Schools.find({ /*listId: props.id*/ }).fetch(),
    };
})(SchoolList);