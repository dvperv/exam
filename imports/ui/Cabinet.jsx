import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Glyphicon, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

// import ExamItem from './ExamItem';

// import {Exams} from "../../api/collections";

class Cabinet extends React.Component{
    constructor(props) {
        super(props);
        // this.state = {
        // };
    }

    renderItems(){
        return this.props.exams.map((exam) => (
            <ExamItem key={exam._id} exam={exam} />
        ));
    }

    render(){
        return(//{this.renderItems}
            <table>
            </table>
        );
    }
}

Cabinet.propTypes = {
    // currentUser: PropTypes.object,
    // sortByDateTime: PropTypes.number,
    // sortByTitle: PropTypes.number,
    // sortByTeacher: PropTypes.number,
    // sortByCourse: PropTypes.number,
};

export default withTracker(props => {
    // Do all your reactive data access in this method.
    // Note that this subscription will get cleaned up when your component is unmounted
    // const handle = Meteor.subscribe('exams');//TODO в зависимости от группы и т.д.

    return {
        // exams: Exams.find({}).fetch(),
    };
})(Cabinet);