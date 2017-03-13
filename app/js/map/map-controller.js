angular.module('app')
.controller('mapController', function($scope) {
    var map;
    var infowindow;

    function initMap() {
      var dublin = {lat: 53.34560667126015, lng: -6.262207028750026};

      map = new google.maps.Map(document.getElementById('map'), {
        center: dublin,
        zoom: 15
      });

      infowindow = new google.maps.InfoWindow();
        
    var contentString="";

       contentString += " <a href=\"#\/tab\/home\/";
       contentString += i;
       contentString += "\"><img class=\"map-marker\" src=\"";
       contentString += places[i].photo
       contentString += "\"><\/a>";

      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: dublin,
        radius: 500,
        types: ['movie_theater']
      }, callback);
    }

    function callback(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
      }
    }

    function createMarker(place) {
      var placeLoc = place.geometry.location;
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
      });
    }

    //var googleApiLink = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAtozyR-4A0LEo_aQAgr1H_4wUvGkyoP8E&callback=initMap";
   
});