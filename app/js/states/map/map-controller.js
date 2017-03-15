angular.module('app')
.controller('mapController', function($scope) {
   
     $scope.places = [];

        var dublin = { lat: 53.3416542, lng: -6.2570467 };
        var infoWindow = new google.maps.InfoWindow();

        var map = new google.maps.Map(document.getElementById('map'), {
            center: dublin,
            zoom: 15,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: false,
            disableDefaultUI: true
        });

    //Searching for cinemas location with movie_theater
        var service = new google.maps.places.PlacesService(map);
          service.nearbySearch({
            location: dublin,
            radius: 500,
            types: ['movie_theater']
            }, callback)
            .then(function(places){
                   $scope.places = places;
                   $scope.places.forEach(function(place){
                       addMarker(place);
                   })
            });;
            

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
                    infoWindow.setContent(place.name);
                    infoWindow.open(map, marker);
            });
        } 
    //var googleApiLink = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAtozyR-4A0LEo_aQAgr1H_4wUvGkyoP8E";
   
});