angular
	.module('myapp')
	.controller('homeCtrl',['$scope', function($scope){
		$scope.title = 'Home';
		$scope.items = ['home','about','contact'];
	}]);