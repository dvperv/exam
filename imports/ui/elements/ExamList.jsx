import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import ExamItem from './ExamItem';

import {Exams} from "../../api/collections";

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

    renderItems(){
        return this.props.exams.map((exam) => (
            <ExamItem key={exam._id} exam={exam} />
        ));
    }

    render(){
        return(//{this.renderItems}
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th>Предмет</th>
                        <th>Преподаватель</th>
                        <th>Срок</th>
                        <th>Статус</th>
                        <th>Оценка</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderItems()}
                </tbody>
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
    const handle = Meteor.subscribe('exams');//TODO в зависимости от группы и т.д.

    return {
        currentUser: Meteor.user(),
        sortByDateTime: -1,
        sortByTitle: 1,
        sortByTeacher: 1,
        sortByCourse: 1,
        exams: Exams.find({}).fetch(),
    };
})(ExamList);