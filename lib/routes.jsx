import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import App from '../imports/ui/App';
// import Inbox from '../imports/ui/Inbox';
import Search from '../imports/ui/Search';
// import Cabinet from '../imports/ui/Cabinet';

// import Blaze from 'meteor/gadicc:blaze-react-component';

FlowRouter.route('/', {
    name: 'Landing.show',
    action() {
        mount(App, {main: <Search/>,});
    },
});

FlowRouter.route('/search', {
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