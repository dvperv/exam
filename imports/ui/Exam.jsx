import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Button, ControlLabel, Form, FormControl, FormGroup, Glyphicon, Label, Nav, Navbar, NavItem } from 'react-bootstrap';
import { withTracker } from 'meteor/react-meteor-data';

import Question from './elements/Question';

class Exam extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            questions: [
                {
                    question: 'Сколько у тебя рук',
                    answers: [
                        {variant:'Ноль', result:0},
                        {variant:'Две', result:1},
                        {variant:'Десять', result:0},],
                    total:1},
                {
                    question: 'Отметьте времена года',
                    answers: [
                        {variant:'Зима', result:1},
                        {variant:'Жара', result:0},
                        {variant:'Лето', result:1},
                        {variant:'Осень', result:1},],
                    total:3},]
        };
    }

    render(){
        return(
            <div>
                <Question q_id={this.props.q_id} question={this.state.questions[this.state.current]}/>
                <Nav>
                    <ul class="pagination">
                        <li>
                            <a href="#" aria-label="Пред.">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li><a href={"/exam/" + /*this.props.exam._id*/"0" + "/0"}>1</a></li>
                        <li><a href={"/exam/" + /*this.props.exam._id */"0" + "/1"}>2</a></li>
                        <li>
                            <a href="#" aria-label="След.">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </Nav>
                <Button href={"/search"}>Завершить</Button>
            </div>
        );
    }
}

Exam.propTypes = {
    _id: PropTypes.number,
    q_id: PropTypes.number,
};

export default withTracker(props => {
    // Do all your reactive data access in this method.
    // Note that this subscription will get cleaned up when your component is unmounted
    // const handle = Meteor.subscribe('todoList', props.id);

    return {
        currentUser: Meteor.user(),
        _id: props._id,
        q_id: props.q_id,
        // listLoading: !handle.ready(),
        // tasks: Tasks.find({ listId: props.id }).fetch(),
    };
})(Exam);