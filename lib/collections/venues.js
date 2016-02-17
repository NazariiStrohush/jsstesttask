Venues = new Mongo.Collection('venues');

Meteor.methods({
	insertVenue: function(venue){
		check(venue, {
	    	venueName: String,
            city: String,
            latitude: Number,
            longitude: Number,
            street: String
    	});
    	return Venues.insert(venue);
	},

	removeAllVenues: function() {
		return Venues.remove({});
	}
});