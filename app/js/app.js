var app = angular.module('app',['ui.router'])
.config(function($stateProvider) {
   var home = {
            name: 'home',
            url: '/home',
            views: {
                '': {
                    templateUrl: '../home.html',
                }
            }
   }
  
  var aboutState = {
    name: 'about',
    url: '/movie_list',
    templateUrl: '../movie_list.html'
  }
  
  var contactState = {
    name: 'contact',
    url: '/movie_details',
    templateUrl: '../movie_details.html'
  }

  var blogState = {
    name: 'blog',
    url: '/map',
    templateUrl: '../map.html'
  }
  
  var blogState = {
    name: 'blog',
    url: '/screenings',
    templateUrl: '../screenings.html'
  }

  $stateProvider.state(home);
  $stateProvider.state(aboutState);
  $stateProvider.state(contactState);
  $stateProvider.state(blogState);
});