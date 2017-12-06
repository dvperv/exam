import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, ControlLabel, Form, FormControl, FormGroup, Glyphicon, Label, Nav, Navbar, NavItem } from 'react-bootstrap';
import Blaze from 'meteor/gadicc:blaze-react-component';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

// import '../startup/client/index';
import ExamList from './elements/ExamList';

class Search extends React.Component{
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

    getExams(){
        return [
            { _id: 1, title: 'This is exam 1', status: "assigned", deadline: new Date("January 13, 2018 11:13:00"), timeToComplete: 240 },
            //{number:1, question: 'Сколько у тебя рук', answers: [{variant:'Ноль', result:0},{variant:'Две', result:1},{variant:'Десять', result:0},], total:1}
            //{number:2, question: 'Отметьте времена года', answers: [{variant:'Зима', result:1},{variant:'Жара', result:0},{variant:'Лето', result:1},{variant:'Осень', result:1},], total:3}
            { _id: 2, title: 'This is exam 2', status: "closed", deadline: new Date("October 13, 2017 11:13:00"), passed: true, score: 78, timeToComplete: 240  },
            { _id: 3, title: 'This is exam 3', status: "closed", deadline: new Date("October 13, 2017 11:13:00"), passed: false, score: 7, timeToComplete: 240  },
            { _id: 4, title: 'This is exam 4', status: "open", deadline: new Date("January 13, 2018 11:13:00"), timeToComplete: 240  },
        ];
    }

    // handleClick() {
    //     if(this.state.isOn) {
    //         //выключить
    //         this.setState(prevState => ({
    //             total: 0,
    //             elapsed: 0,
    //             isOn: false,
    //         }));
    //         clearInterval(this.timerID);
    //     }
    //     else {
    //         //включить
    //         this.setState(prevState => ({
    //             total: (prevState.HH * 60 + prevState.MM) * 60 * 1000,
    //             elapsed: 0,
    //             isOn: true,
    //         }));
    //         this.timerID = setInterval(
    //             () => this.tick(),
    //             1000
    //         );
    //     }
    // }
    //
    // handleChangeHH(event) {
    //     this.setState({HH: event.target.value});
    // }
    //
    // handleChangeMM(event) {
    //     this.setState({MM: event.target.value});
    // }
    //
    // tick() {
    //     if (this.state.elapsed < this.state.total) {
    //         this.setState(prevState => ({
    //             elapsed: prevState.elapsed + 1000
    //         }));
    //     }
    //     else {
    //         this.setState(prevState => ({
    //             isOn: false,
    //         }));
    //         clearInterval(this.timerID);
    //     }
    // }

    render(){
        return(<ExamList />);
    }
}

export default withTracker(props => {
    // Do all your reactive data access in this method.
    // Note that this subscription will get cleaned up when your component is unmounted
    // const handle = Meteor.subscribe('todoList', props.id);

    return {
        currentUser: Meteor.user(),
        // listLoading: !handle.ready(),
        // tasks: Tasks.find({ listId: props.id }).fetch(),
    };
})(Search);