App = Ember.Application.create();

App.ApplicationController = Ember.Controller.extend({ 
	firstname: 'Gokul'
});

App.Router.map(function() {
	  this.route("about");
});

