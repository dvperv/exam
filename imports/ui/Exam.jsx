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
                    total:3},],
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick(){
        console.log("Leave happened");//TODO Leave update
    }

    handleSubmit(){
        // this.handleClick();
        // console.log("Exam answers saved");//TODO Submit update
        alert("Ok");
    }

    render(){
        //
        return(
            <div>
                <Question question={this.state.questions[this.props.current]}/>
                <div>
                <ul className="pagination">
                    <li>
                        <a href="/exam/0/0" aria-label="Пред." onClick={this.handleClick}>
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li><a href={"/exam/" + /*this.props.exam._id*/"0" + "/0"} onClick={this.handleClick}>1</a></li>
                    <li><a href={"/exam/" + /*this.props.exam._id */"0" + "/1"} onClick={this.handleClick}>2</a></li>
                    <li>
                        <a href="/exam/0/1" aria-label="След." onClick={this.handleClick}>
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
                </div>
                <a className="btn btn-primary" href={"/search"} onClick={this.handleSubmit}>Завершить</a>
            </div>
        );
    }
}

Exam.propTypes = {
    _id: PropTypes.number,
    current: PropTypes.number,
};

export default withTracker(props => {
    // Do all your reactive data access in this method.
    // Note that this subscription will get cleaned up when your component is unmounted
    // const handle = Meteor.subscribe('todoList', props.id);

    return {
        currentUser: Meteor.user(),
        _id: props._id,
        current: props.current,
        // listLoading: !handle.ready(),
        // tasks: Tasks.find({ listId: props.id }).fetch(),
    };
})(Exam);