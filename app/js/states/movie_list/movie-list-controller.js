angular.module('app')
.controller('movieListController', function($scope, screeningsService, $stateParams) {
    
            var map = new google.maps.Map( {
            center: place.geometry.location;
            });

    
         var service = new google.maps.places.PlacesService(map);  
            service.getDetails({
            placeId: place.place_id
          }, function(place, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location
              });
              google.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent(place.name);
                infowindow.open(map, this);
              });
            }
          });

       

      //Data of screenings
           screeningsService.getScreenings()                  
            .then(function (cinemas) {
               cinemas.forEach(function (cinema) {
                    if ($stateParams.place_id === cinema.cineId) { //$stateParams providing id of the state and cineId from jSON?
                        $scope.cinema = cinema;
                    }
                });
            });
    
    
})
          
//links to help : For example https://developers.google.com/maps/documentation/javascript/examples/place-details
//                for scope https://developers.google.com/places/web-service/details?hl=fr
//
                    