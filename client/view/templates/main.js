map = null;
Template.main.onRendered(function() {
  GoogleMaps.load();
});

Template.main.helpers({
  MapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(35.6895, 139.69171),
        zoom: 8
      };
    }
  }
});

Template.main.onCreated(function() {
  GoogleMaps.ready('JSSMap', function(map) {
    
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
        
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(venue.location.lat, venue.location.lng),
          map: GoogleMaps.maps.JSSMap.instance
        });

        var infowindow = new google.maps.InfoWindow();
        
        google.maps.event.addListener(marker, 'click', (function(marker) {
          return function() {
            infowindow.setContent(venue.name);
            infowindow.open(GoogleMaps.maps.JSSMap.instance, marker);
          }
        })(marker));

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