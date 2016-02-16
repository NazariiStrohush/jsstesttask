Router.configure({
  layoutTemplate: 'main',
  waitOn: function() { 
    	return Meteor.subscribe('queries');
  },
  data: function(){
  	return {
  		all_queries: Queries.find()
  	};
  }
});

Router.map(function() {
  this.route('main', {path: '/'});
});