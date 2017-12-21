import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import App from '../imports/ui/App';
// import Inbox from '../imports/ui/Inbox';
import Search from '../imports/ui/Search';
// import Cabinet from '../imports/ui/Cabinet';
import Exam from '../imports/ui/Exam';
import SchoolList from '../imports/ui/teacher/SchoolList';
import School from '../imports/ui/teacher/School';
import Dept from '../imports/ui/teacher/Dept';

// import Blaze from 'meteor/gadicc:blaze-react-component';

FlowRouter.route('/', {
    name: 'Landing.show',
    action() {
        mount(SchoolList);
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
//
// FlowRouter.route('/cabinet', {
//     triggersEnter: [function(context, redirect) {
//         if (!Meteor.user()) redirect('/');
//     }],
//     // waitOn: function() {
//     //     return Meteor.subscribe('currentUserInfo');
//     // },
//     name: 'Cabinet.show',
//     action() {
//         mount(App, {
//             main: <Cabinet/>,
//         });
//     },
// });