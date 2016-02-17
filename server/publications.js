Meteor.publish('queries', function() {
	if(this.userId) {
		return Queries.find({userId: this.userId});
	}
});
Meteor.publish('venues', function() {
	return Venues.find();
});