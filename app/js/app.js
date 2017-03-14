var app = angular.module('app',['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  var welcome = {
    name: 'Welcome',
    url: '/',
    templateUrl: './js/states/welcome/welcome.html'
  }
  

  var movieDetails = {
    name: 'Movie details',
    url: '/movie_details',
    templateUrl: './js/states/movie_details/movie_details.html',
    controller: 'movieDetController'
  }
  
  var movieList = {
    name: 'Movie List',
    url: '/movie_list',
    templateUrl: './js/states/movie_list/movie_list.html'
  }

  var map = {
    name: 'Map',
    url: '/map',
    templateUrl: './js/states/map/map.html',
    controller: 'mapController'
  }

  $urlRouterProvider.otherwise("/");
  $stateProvider.state(welcome);
  $stateProvider.state(movieDetails);
  $stateProvider.state(movieList);
  $stateProvider.state(map);
 
});