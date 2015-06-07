angular
	.module('myapp')
	.controller('createCtrl',['$scope', function($scope){
		$scope.title = 'Create';
		$scope.items = ['1','about2','contact2'];
	}]);