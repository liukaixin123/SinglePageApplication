var app = angular.module('myApp', ['ngRoute', 'userModule']);

app.controller('AppController', ['$scope', function($scope){
	
}]);

app.config(function($routeProvider){
	$routeProvider.when('/userinfo',{
		templateUrl:'view/userInfo.html',
		controller:'UserInfoController'
	}).when('/latestnews', {
		templateUrl:'view/latestnews.html',
		controller:'LatestNewsController'
	}).when('/intro', {
		templateUrl:'view/introduce.html',
		controller:'IntroController'
	}).when('/message', {
		templateUrl:'view/message.html',
		controller:'MessageController'
	}).otherwise({
		redirectTo:'/latestnews'
	});
});


