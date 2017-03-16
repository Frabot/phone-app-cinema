angular.module('app')
.controller('movieListController', function($scope, screeningsService, $stateParams) {
         var dublin = { lat: 53.34828104, lng: -6.26859236 };
        var map;

                map = new google.maps.Map(document.getElementById('cineMap'), {
                    center: $scope.place.location,
                    zoom: 15,
                    scrollwheel: false,
                    navigationControl: false,
                    mapTypeControl: false,
                    scaleControl: false,
                    draggable: false,
                    disableDefaultUI: true
                });

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



            //Data of screenings

           screeningsService.getScreenings()

                .then(function(cine) {

                    if ($stateParams.id === place.cineId) { //$stateParams providing id of the state and cineId from jSON?

                             $scope.place = cine;

                    }

                    addMarker($scope.place);

                }

            );

            function addMarker(place) {
            var marker = new google.maps.Marker({
                map: map,
                position: place.location,
                icon: {
                    url: 'https://developers.google.com/maps/documentation/javascript/images/circle.png',
                    anchor: new google.maps.Point(10, 10),
                    scaledSize: new google.maps.Size(10, 17)
                }
            });



            google.maps.event.addListener(marker, 'click', function () {

                service.getDetails(place, function (result, status) {

                    if (status !== google.maps.places.PlacesServiceStatus.OK) {

                        console.error(status);

                        return;

                    }

                    infoWindow.setContent(result.name);

                    infoWindow.open(map, marker);

                });

            });

         }


})