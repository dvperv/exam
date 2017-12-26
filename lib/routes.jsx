import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import App from '../imports/ui/App';
import Search from '../imports/ui/Search';
import Exam from '../imports/ui/Exam';
import SchoolList from '../imports/ui/teacher/SchoolList';
import School from '../imports/ui/teacher/School';
import Dept from '../imports/ui/teacher/Dept';

import LockedButton from '../imports/ui/elements/LockedButton';

FlowRouter.route('/', {
    name: 'Landing.show',
    action() {
        mount(App, {
            main: <LockedButton glyph="remove" caption="Удалить" locked/>//<Search/>,
        });
    },
});

FlowRouter.route('/schoollist', {
    name: 'SchoolList.show',
    action() {
        mount(App, {
            main: <SchoolList/>
        });
    },
});

FlowRouter.route('/search', {//TODO Если приходит с _id, значит завершен экзамен, надо признак поставить
    triggersEnter: [function(context, redirect) {
        if (!Meteor.user()) redirect('/');
    }],
    name: 'Search.show',
    action() {
        mount(App, {
            main: <Search/>,
        });
    },
});

FlowRouter.route('/exam/:_id/:current', {
    name: 'Exam.show',
    action(params, queryParams) {
        mount(Exam, {
            _id: Number(params._id),
            current: Number(params.current),
        });
    }
});

FlowRouter.route('/school/edit/:_id', {
    name: 'School.edit',
    action(params, queryParams) {
        mount(School, {
            _id: params._id,
            action: 'edit',
        });
    }
});

FlowRouter.route('/school/new', {
    name: 'School.edit',
    action(params, queryParams) {
        mount(School, {
            action: 'new',
        });
    }
});

FlowRouter.route('/dept/edit/:_id', {
    name: 'Dept.edit',
    action(params, queryParams) {
        mount(Dept, {
            _id: params._id,
            action: 'edit',
        });
    }
});

FlowRouter.route('/dept/new', {
    name: 'Dept.edit',
    action(params, queryParams) {
        mount(Dept, {
            action: 'new',
        });
    }
});