import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { ControlLabel, FormControl, FormGroup, Image, Jumbotron } from 'react-bootstrap';
import { withTracker } from 'meteor/react-meteor-data';

import { Depts } from '../../api/collections';

import CourseList from './CourseList';
import GroupList from './GroupList';

class Dept extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            this.props.ready?
            <form>
                <FormGroup>
                    <h2>
                        {(this.props.action==='edit'?'Изменить':this.props.action==='new'?'Добавить':'Ошибка')
                        + " "
                        + this.props.dept.title}
                    </h2>
                    <FormControl
                        type="text"
                        placeholder="Название"
                    />
                    <CourseList dept_id={this.props._id}/>
                    <GroupList dept_id={this.props._id}/>
                </FormGroup>
            </form>
            :
            <div className="text-center">
                <h2>Секундочку</h2>
                <Image style={{width: 50, height:50}} src="/loading.gif" circle />
            </div>
            );
    }
}

Dept.propTypes = {
    _id: PropTypes.string,
    action: PropTypes.string,
    dept: PropTypes.object,
    ready: PropTypes.bool,
};

export default withTracker(props => {
    // Do all your reactive data access in this method.
    // Note that this subscription will get cleaned up when your component is unmounted
    // const handle = Meteor.subscribe('todoList', props.id);
    const handle = Meteor.subscribe('depts');

    return {
        currentUser: Meteor.user(),
        _id: props._id,
        action: props.action,
        dept: Depts.findOne({ _id: props._id }),//TODO Проверить если _id не существует (напр при добавлении или просто косяк)
        ready: handle.ready(),
    };
})(Dept);