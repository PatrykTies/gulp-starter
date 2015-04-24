angular
	.module('myapp')
	.controller('aboutCtrl',['$scope', function($scope){
		$scope.title = 'About';
		$scope.items = ['1','about2','contact2'];
	}]);