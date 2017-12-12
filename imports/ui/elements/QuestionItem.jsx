import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Checkbox, ListGroupItem } from 'react-bootstrap';

import { withTracker } from 'meteor/react-meteor-data';

// import '../startup/client/index';

class QuestionItem extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onAnswerChange(this.props.index, e.target.checked);
    }

    render(){
        return(
            <ListGroupItem>
                <Checkbox onChange={this.handleChange}>{this.props.item.variant}</Checkbox>
            </ListGroupItem>);
    }
}

QuestionItem.propTypes = {
    index: PropTypes.number,
    exam: PropTypes.object,
    onAnswerChange: PropTypes.func,
};

export default withTracker(props => {
    // Do all your reactive data access in this method.
    // Note that this subscription will get cleaned up when your component is unmounted
    // const handle = Meteor.subscribe('todoList', props.id);

    return {
        currentUser: Meteor.user(),
        index: props.index,
        item: props.item,
        onAnswerChange: props.onAnswerChange,
        // tasks: Tasks.find({ listId: props.id }).fetch(),
    };
})(QuestionItem);