angular.module('myApp').controller('projectsController', projectsController);
function projectsController($scope, $http, $location , $routeParams) {
	//loop through all to display the page

	//data for an individual project page
	$scope.title = null;
	$scope.display_data = null;

	$scope.title = $routeParams.name.slice(0,-4);
	var configPath = '/pages/projects/config/' + $scope.title + '.json';
	
	$http.get(configPath)
		.then(function(response){
			$scope.display_data = response.data.data;
			console.log($scope.display_data);
		}, function(response) {
			window.alert( response.statusText);
		});
}