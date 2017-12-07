import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Button, ControlLabel, Form, FormControl, FormGroup, Glyphicon, Label, Nav, Navbar, NavItem } from 'react-bootstrap';
import Blaze from 'meteor/gadicc:blaze-react-component';
import { withTracker } from 'meteor/react-meteor-data';

// import '../startup/client/index';

class Question extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isOn: false,
            HH: 0,
            MM: 0,
            elapsed: 0,
            total: 0,
        };
    }

    render(){
        return(
            <div>
                <p>вопрос {this.props.q_id}</p>
                <h1>{this.props.question.question}</h1>
            </div>
            );
    }
}

Question.propTypes = {
    q_id: PropTypes.number,
    question: PropTypes.object,
};

export default withTracker(props => {
    // Do all your reactive data access in this method.
    // Note that this subscription will get cleaned up when your component is unmounted
    // const handle = Meteor.subscribe('todoList', props.id);

    return {
        currentUser: Meteor.user(),
        q_id: props.key,
        question: props.exam,
        // tasks: Tasks.find({ listId: props.id }).fetch(),
    };
})(Question);