angular.module('app')
.service('screeningsService', function($http){
    this.getScreenings = function(){
        return $http.get('./data/screeningsList.json')
        .then(function(data){
             return screeningsList.data;
        })
    }
});