var app = angular.module('myApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/logIn',
		{
			templateUrl: 'pages/logIn.html',
			controller: 'LogInController'
		}).
		when('/homePage',
		{
			templateUrl: 'pages/homePage.html',
			controller: 'HomePageController'
		}).
		when('/signUp',
		{
			templateUrl: 'pages/signUp.html',
			controller: 'SignUpController'
		}).
		when('/blogPage',
		{
			templateUrl: 'pages/blogPage.html',
			controller: 'BlogController'
		}).
		when('/post',
		{
			templateUrl: 'pages/post.html',
			controller: 'PostController'
		})
}])