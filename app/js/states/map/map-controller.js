angular.module('app')
.controller('mapController', function($scope) {
   

        $scope.places = [];
    
        var dublin = { lat: 53.3416542, lng: -6.2570467 };

        var map = new google.maps.Map(document.getElementById('map'), {
            center: dublin,
            zoom: 14
          });
        
    
//        //adding Info to the info window 
//        var cinemaDetails = `
//            <h4>{{name}}</h4>
//            <img src="{{icon}}" />
//            <button class="button button-calm" ui-ref="href="#/movie_list/{{place.id}}">Go</button>
//        `;
//       
        var infowindow = new google.maps.InfoWindow({
            //content: cinemaDetails
        });
//         var marker = new google.maps.Marker({
//            position: uluru,
//            map: map,
//          });
//          marker.addListener('click', function() {
//            infowindow.open(map, marker);
//          });

    
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
            location: dublin,
            radius: 9000,
            type: ['movie_theater']
        }, callback);


        function callback(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                $scope.$apply(function () {
                    $scope.places = results;
                });
                for (var i = 0; i < results.length; i++) {
                  createMarker(results[i]);
                };
            }
        }
     
        function createMarker(place) {
          var placeLoc = place.geometry.location;
          var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
              icon: {
                    url: 'https://developers.google.com/maps/documentation/javascript/images/circle.png',
                    anchor: new google.maps.Point(10, 10),
                    scaledSize: new google.maps.Size(10, 17)
             }
          });

          google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, marker);
          });
        }

    //var googleApiLink = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAtozyR-4A0LEo_aQAgr1H_4wUvGkyoP8E";
   
});