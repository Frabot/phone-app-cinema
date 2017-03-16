angular.module('app')
.controller('movieListController', function($scope, screeningsService, $stateParams) {
    
    
      //Data of screenings
           screeningsService.getScreenings()                  
            .then(function (places) {
               places.forEach(function (place) {
                    if ($stateParams.place_id === place.cineId) { //$stateParams providing id of the state and cineId from jSON?
                        $scope.place = place;
                    }
                });
            });
    
    
    
})
          

                    