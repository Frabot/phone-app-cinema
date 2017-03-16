angular.module('app')
.controller('movieListController', function($scope, screeningsService, $stateParams) {
    
    
      //Data of screenings
           screeningsService.getScreenings()                  
            .then(function (cine) {
                cine.forEach(function (aCine) {
                    if ($stateParams.place_id === aCine.cineId) { //$stateParams providing id of the state and cineId from jSON?
                        $scope.aCine = cine;
                    }
                });

            
            });
    
    
    
})
          

                    