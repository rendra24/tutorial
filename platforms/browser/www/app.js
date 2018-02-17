'use strict';
var appku = angular.module('myapp', ['ui.router','restangular']);
appku.config(function(RestangularProvider, $stateProvider, $urlRouterProvider){
	RestangularProvider.setBaseUrl('http://192.168.123.21:8080/crud/myhttp/');
	RestangularProvider.setDefaultHeaders({'Authorization':'Basic '+btoa("basic_auth_user:basic_auth_passwd")});
	RestangularProvider.setJsonp(true);
	RestangularProvider.setDefaultRequestParams('jsonp', {jsonp: 'JSON_CALLBACK'});
	$urlRouterProvider.otherwise('/beranda');

	$stateProvider
		.state('beranda', {
			url: '/beranda',
			templateUrl: 'parsial-beranda.html',
			controller: 'berandaController'
		})
		.state('step2', {
			url: '/step2',
			templateUrl: 'beranda-step2.html',
			controller: 'setp2Controller'
		})
		.state('rate', {
			url: '/rate',
			templateUrl: 'rate.html',
			controller: 'berandaController'
		})

		.state('order', {
			url: '/order',
			templateUrl: 'order.html',
			controller: 'berandaController'
		})
		
		.state('profile', {
			url: '/profile',
			templateUrl: 'profile.html',
			controller: 'berandaController'
		})
		.state('jobs', {
			url: '/jobs',
			templateUrl: 'job.html',
			controller: 'berandaController'
		})
		.state('history', {
			url: '/history',
			templateUrl: 'history.html',
			controller: 'berandaController'
		})
		.state('detail_history', {
			url: '/detail_history',
			templateUrl: 'detail_history.html',
			controller: 'berandaController'
		})

		.state('chat', {
			url: '/chat',
			templateUrl: 'chat.html',
			controller: 'berandaController'
		})

		.state('topup', {
			url: '/topup',
			templateUrl: 'topup.html',
			controller: 'berandaController'
		})

		.state('cara_topup', {
			url: '/cara_topup',
			templateUrl: 'cara_topup.html',
			controller: 'berandaController'
		})
		.state('promo', {
			url: '/promo',
			templateUrl: 'promo.html',
			controller: 'berandaController'
		})
		
		

		.state('tentang', {
			url: '/tentang',
			templateUrl: 'parsial-tentang.html',
			controller: 'tentangController'
		});
});



appku.controller('berandaController', function($scope) {
	 $scope.pageClass = 'page-home';
	 
});

appku.controller('tentangController', function($scope) {
	     $scope.pageClass = 'page-about';
});

appku.controller('setp2Controller',function($scope){
	 $scope.pageClass = 'caridriver';
});


appku.service('TipeService', function(Restangular, $filter) {
	Restangular.extendModel('sql_types', function(model) {
		model.prettifyAmount = function() {
			return $filter('currency')(this.col_decimal);
		};
		return model;
	});
	
	this.getTipenya = function(id) {
		return Restangular.one("sql_types", id).get();
	}
});

appku.directive('kontakDawud' , function() {
	return {
		restrict: 'E',
		template: '\
		<div class="container-fluid">\
			<div class="row">\
				<div class="col-sm-4">\
					<b>Muhammad Dawud</b>\
				</div>\
				<div class="col-sm-4">\
					<b>Twitter</b>: <a href="https://twitter.com/dhaowoods">@dhaowoods</a>\
				</div>\
				<div class="col-sm-4">\
					<b>FB</b>: <a href="https://www.facebook.com/profile.php?id=1656390643">facebook</a>\
				</div>\
			</div>\
		</div>'
	}
});