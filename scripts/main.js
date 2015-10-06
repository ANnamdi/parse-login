'use strict';
var React = require('react');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;

var NavigationComponent = require('./components/NavigationComponent');
var HomeComponent = require('./components/HomeComponent');
var DashboardComponent = require('./components/DashboardComponent');
var LoginComponent = require('./components/LoginComponent');
var RegisterComponent = require('./components/RegisterComponent');
Parse.initialize("YQjASggvONwPLDCh4GuUJZ2X6sR2frlLFfMihpCD", "DUFH5DsehiitIFlTdOZ6q1TZGBRiOwkKo5DrEk98"); // parse is global you don't have to require. Index calls it. We must initialize Parse though, which we've done.


var app = document.getElementById('app');

React.render(
	<NavigationComponent />,
	document.getElementById('nav')
);

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'dashboard': 'dashboard',
		'login': 'login',
		'register': 'register'
	},
	home: function() {
		React.render(<HomeComponent />, app);
	},
	dashboard: function() {
		React.render(<DashboardComponent />, app);
	},
	login: function() {
		React.render(<LoginComponent router={r} />, app); // the right side is what we're sending, the left side is what we're sending the right side into.
	},
	register: function() {
		React.render(<RegisterComponent router={r} />, app);
	}
});

var r = new Router();
Backbone.history.start();