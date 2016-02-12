Template.main.onRendered(function () {
    Mapbox.debug = true;
    Mapbox.load({
      gl: true
    });

    this.autorun(function () {
      if (Mapbox.loaded()) {
        mapboxgl.accessToken = 'pk.eyJ1IjoibmF6YXJpaXN0cm9odXNoIiwiYSI6ImNpa2lyMXp6czAwNDF3am00ejhvcnZzcWQifQ.D1neZSb0jjMlVM0GArJ80w';
        var map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/nazariistrohush/cikiu7r5c005kcilu1v5egwhw',
        });
      }
    });
  });