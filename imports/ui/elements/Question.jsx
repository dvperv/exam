import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { ListGroup } from 'react-bootstrap';
import { withTracker } from 'meteor/react-meteor-data';

import QuestionItem from './QuestionItem';

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

        this.handleAnswerChange = this.handleAnswerChange.bind(this);
    }

    handleAnswerChange(index, value){
        console.log("Вопрос "+index+" Ответ: " + value);
    }

    renderItems(){
        return this.props.question.answers.map((item, index) => (
            <QuestionItem key={index} index={index} item={item} onAnswerChange={this.handleAnswerChange}/>
        ));
    }

    render(){//<p>вопрос {this.props.q_id}</p>
        return(
            <div>
                <h1>{this.props.question.question}</h1>
                <ListGroup>
                    {this.renderItems()}
                </ListGroup>
            </div>
            );
    }
}

Question.propTypes = {
    current: PropTypes.number,
    questions: PropTypes.object,
};

export default withTracker(props => {
    // Do all your reactive data access in this method.
    // Note that this subscription will get cleaned up when your component is unmounted
    // const handle = Meteor.subscribe('todoList', props.id);

    return {
        currentUser: Meteor.user(),
        question: props.question,
        // tasks: Tasks.find({ listId: props.id }).fetch(),
    };
})(Question);