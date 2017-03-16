angular.module('app')
.controller('movieListController', function($scope, $http, $stateParams) {
    
            //Getting screenings info for V1 
            $http.get('../../../data/screeningsListV1.json').then(function(screeningsCine){
                 $scope.screeningsCine = screeningsCine.data;
             }) 
  
            var dublin = { lat: 53.3500999, lng: -6.26863528 };
            var map = new google.maps.Map(document.createElement('div'), {
		          center: dublin,
		          zoom: 15
		        });

           var service = new google.maps.places.PlacesService(map);


	        service.getDetails({
	          placeId: $stateParams.id
	        }, function(place, status) {
	          if (status === google.maps.places.PlacesServiceStatus.OK) {
	          	 $scope.$apply(function () {
                    $scope.place = place;
				});
	          	
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







//      //Data of screenings for
//           screeningsService.getScreenings()                  
//            .then(function (cinemas) {
//               cinemas.forEach(function (cinema) {
//                    if ($stateParams.place_id === cinema.cineId) { //$stateParams providing id of the state and cineId from jSON?
//                        $scope.cinema = cinema;
//                    }
//                });
//            });
    
    
})
          
//links to help : For example https://developers.google.com/maps/documentation/javascript/examples/place-details
//                for scope https://developers.google.com/places/web-service/details?hl=fr
//
                    