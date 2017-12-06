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
            <tr>
                <td>{this.props.exam.status==="open"?<Button href={"/exam/" + this.props.exam._id}><Glyphicon glyph="log-in"/></Button>:""}</td>
                <td>{this.props.exam.title}</td>
                <td>{this.props.exam.teacher}</td>
                <td>{this.props.exam.deadline}</td>
                <td>{this.props.exam.status}</td>
                <td>{this.props.exam.score}{' '}{this.props.exam.score?(this.props.exam.passed?<Glyphicon glyph="ok"/>:<Glyphicon glyph="remove"/>):""}</td>
            </tr>);
    }
}

Question.propTypes = {
    key: PropTypes.number,
    exam: PropTypes.object,
};

export default withTracker(props => {
    // Do all your reactive data access in this method.
    // Note that this subscription will get cleaned up when your component is unmounted
    // const handle = Meteor.subscribe('todoList', props.id);

    return {
        currentUser: Meteor.user(),
        key: props.key,
        exam: props.exam,
        // tasks: Tasks.find({ listId: props.id }).fetch(),
    };
})(Question);