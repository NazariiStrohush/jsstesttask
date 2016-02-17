map = null;
Template.main.onRendered(function () {
    Mapbox.debug = true;
    Mapbox.load({
      gl: true
    });

    this.autorun(function () {
      
      if (Mapbox.loaded()) {
        mapboxgl.accessToken = 'pk.eyJ1IjoibmF6YXJpaXN0cm9odXNoIiwiYSI6ImNpa2lyMXp6czAwNDF3am00ejhvcnZzcWQifQ.D1neZSb0jjMlVM0GArJ80w';
        map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/nazariistrohush/cikiu7r5c005kcilu1v5egwhw',
        });
      }
    });
  });

Template.main.events({
  "click #btn": function(e){
    e.preventDefault();
    var query_text = $(e.target).parents().find(".tquery").val();
    params = {
      ll: "35.6895, 139.69171",
      query: query_text,
      limit: 5
    }

  Meteor.call('removeAllVenues', function(error){
    console.log(error);
  })

  Foursquare.find(params, function(error, result) {

    if(error)
      console.log(error);
    else{
      if(result.response.venues.length > 0){
        
        console.log(result);

        venue = result.response.venues[0];

        queryItem = {
            query_text: params.query,
            latitude: venue.location.lat,
            longitude: venue.location.lng,
            distance: venue.location.distance
        }

        Meteor.call('queryInsert', queryItem, function(error, result) {
          if(error)
            console.log(error);
        });

        queryResult = result.response.venues;
        queryResult.forEach(function(venue,i){
        
        var venueItem = {
            venueName: venue.name,
            city: venue.location.city,
            latitude: venue.location.lat,
            longitude: venue.location.lng,
            street: venue.location.address
        }

        Meteor.call('insertVenue', venueItem, function(error, result) {
          if(error)
            console.log(error);
          else
            console.log(result);
        });
        });
      }
    }
  });
  }
});