import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Button, ControlLabel, Form, FormControl, FormGroup, Glyphicon, Label, Nav, Navbar, NavItem } from 'react-bootstrap';
import Blaze from 'meteor/gadicc:blaze-react-component';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

// import '../startup/client/index';
import ExamList from './elements/ExamList';

class Exam extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isOn: false,
        };
    }

    render(){
        return(
            <p>{this.props._id}</p>
        );
    }
}

Exam.propTypes = {
    _id: PropTypes.number,
};

export default withTracker(props => {
    // Do all your reactive data access in this method.
    // Note that this subscription will get cleaned up when your component is unmounted
    // const handle = Meteor.subscribe('todoList', props.id);

    return {
        currentUser: Meteor.user(),
        _id: props._id,
        // listLoading: !handle.ready(),
        // tasks: Tasks.find({ listId: props.id }).fetch(),
    };
})(Exam);