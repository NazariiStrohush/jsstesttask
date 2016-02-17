Router.configure({
  layoutTemplate: 'main',
  waitOn: function() { 
    	return [Meteor.subscribe('queries'), Meteor.subscribe('venues')];
  },
  data: function(){
  	return {
  		all_queries: Queries.find(),
      all_venues: Venues.find()
  	};
  }
});

Router.map(function() {
  this.route('main', {path: '/'});
});