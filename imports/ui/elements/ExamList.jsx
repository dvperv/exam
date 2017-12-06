import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Button, ControlLabel, Form, FormControl, FormGroup, Glyphicon, Label, Nav, Navbar, NavItem } from 'react-bootstrap';
import Blaze from 'meteor/gadicc:blaze-react-component';
import { withTracker } from 'meteor/react-meteor-data';

import ExamItem from './ExamItem';

// import '../startup/client/index';

class ExamList extends React.Component{
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
            { _id: 1, title: 'This is exam 1', teacher: "Ivanoff", status: "assigned", deadline: "January 1, 2018 11:13:00", timeToComplete: 240 },
            //{number:1, question: 'Сколько у тебя рук', answers: [{variant:'Ноль', result:0},{variant:'Две', result:1},{variant:'Десять', result:0},], total:1}
            //{number:2, question: 'Отметьте времена года', answers: [{variant:'Зима', result:1},{variant:'Жара', result:0},{variant:'Лето', result:1},{variant:'Осень', result:1},], total:3}
            { _id: 2, title: 'This is exam 2', teacher: "Ivanoff", status: "closed", deadline: "October 13, 2017 11:13:00", passed: true, score: 78, timeToComplete: 240  },
            { _id: 3, title: 'This is exam 3', teacher: "Petroff", status: "closed", deadline: "October 13, 2017 11:13:00", passed: false, score: 7, timeToComplete: 240  },
            { _id: 4, title: 'This is exam 4', teacher: "Sidoroff", status: "open", deadline: "January 13, 2018 11:13:00", timeToComplete: 240  },
        ];
    }

    renderItems(){
        return this.getExams().map((exam) => (
            <ExamItem key={exam._id} exam={exam} />
        ));
    }

    render(){
        return(//{this.renderItems}
            <table className="table table-hover">
                <tr>
                    <th></th>
                    <th>Предмет</th>
                    <th>Преподаватель</th>
                    <th>Срок</th>
                    <th>Статус</th>
                    <th>Оценка</th>
                </tr>
                {this.renderItems()}
            </table>
        );
    }
}

ExamList.propTypes = {
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

    return {
        currentUser: Meteor.user(),
        sortByDateTime: -1,
        sortByTitle: 1,
        sortByTeacher: 1,
        sortByCourse: 1,
        // tasks: Tasks.find({ listId: props.id }).fetch(),
    };
})(ExamList);