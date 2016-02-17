Template.query_item.helpers({
	distanceKm: function(){
		metres = this.distance;
		return metres > 100 ? (metres / 1000) + " км" : metres + " м";
	}
});

/*Template.query_item.events({
	"click .delete": function(e){
		Meteor.call('removeQuery', this._id, function(error, result){
			if(error)
				console.log(error);
		})
	}
});*/