import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Button, Glyphicon } from 'react-bootstrap';

import { withTracker } from 'meteor/react-meteor-data';

class ExamItem extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.exam.status==="open"?<Button href={"/exam/" + this.props.exam._id + "/0"}><Glyphicon glyph="log-in"/></Button>:""}</td>
                <td>{this.props.exam.title}</td>
                <td>{this.props.exam.teacher}</td>
                <td>{this.props.exam.deadline}</td>
                <td>{this.props.exam.status}</td>
                <td>{this.props.exam.score}{' '}{this.props.exam.score?(this.props.exam.passed?<Glyphicon glyph="ok"/>:<Glyphicon glyph="remove"/>):""}</td>
            </tr>);
    }
}

ExamItem.propTypes = {
    exam: PropTypes.object,
};

export default withTracker(props => {
    // Do all your reactive data access in this method.
    // Note that this subscription will get cleaned up when your component is unmounted
    // const handle = Meteor.subscribe('todoList', props.id);

    return {
        currentUser: Meteor.user(),
        exam: props.exam,
        // tasks: Tasks.find({ listId: props.id }).fetch(),
    };
})(ExamItem);