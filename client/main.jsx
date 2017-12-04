import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';

import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
    i18n.setLocale('ru-RU');
    ReactDOM.render(<App/>, document.getElementById('root'));
});