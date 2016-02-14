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
        //map.setCenter("35.689488","35.689488");
      }
    });
  });

Template.main.events({
  'click .s4': function(e) {
    e.preventDefault();
    params = {
      ll: "35.68949, 139.69171", //Your location use the geo result here
      query: "school",
      limit: 10, //the limit of the query
    }

    Foursquare.find(params, function(error, result) {
      if (error) {
        console.log(error);
      }
      console.log(result);
    });

    }
  });