var app = angular.module('app',['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  var home = {
    name: 'home',
    url: '/',
    templateUrl: '../home.html'
  }
  

  var movieDetails = {
    name: 'Movie details',
    url: '/movie_details',
    templateUrl: '../movie_details.html',
    controller: 'movieDetController'
  }
  
  var movieList = {
    name: 'Movie List',
    url: '/movie_list',
    templateUrl: '../movie_list.html'
  }

  var map = {
    name: 'Map',
    url: '/map',
    templateUrl: '../map.html',
    controller: 'mapController'
  }

  $urlRouterProvider.otherwise("/");
  $stateProvider.state(home);
  $stateProvider.state(movieDetails);
  $stateProvider.state(movieList);
  $stateProvider.state(map);
 
});