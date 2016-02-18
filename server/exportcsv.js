Meteor.methods({
	downloadCSV: function() {
	  var collection = Venues.find().fetch();
	  var heading = true; 
	  var delimiter = ";"
	  return exportcsv.exportToCSV(collection, heading, delimiter);
	}
});