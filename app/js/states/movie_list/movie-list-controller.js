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

		   
		//http://stackoverflow.com/questions/13590465/random-time-generator-for-time-betweeen-7am-to-11am
				` Random random = new Random();
			TimeSpan start = TimeSpan.FromHours(7);
			TimeSpan end = TimeSpan.FromHours(11);
			int maxMinutes = (int)((end - start).TotalMinutes);

			for (int i = 0; i < 100; ++i) {
			   int minutes = random.Next(maxMinutes);
			   TimeSpan t = start.Add(TimeSpan.FromMinutes(minutes));
			   // Do something with t...
			} `

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
                    