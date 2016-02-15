Router.configure({
  layoutTemplate: 'main',
  waitOn: function() { 
    if(!Meteor.user()){
    	return Meteor.subscribe('queries');
    }
  }
});