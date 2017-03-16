angular.module('app')
.service('screeningsService', function($http){
    this.getScreenings = function(){
        return $http.get('./data/screeningsList.json')
        .then(function(screeningsList){
             return screeningsList.data;
        })
    }
});