var app = angular.module('firstApplication', ['ngMaterial', 'ngRoute']);
app.controller('pageController', pageController);

function pageController( $scope, $mdSidenav, $http){
   $scope.loadLists = function(){
      $http.get('pages/projects/projects.json').then(
         function(response){
            $scope.projectList = response.data.projects;
         },
         function(response){
            window.alert( "Something Went Wrong :(");
         });
   };

   $scope.toggleLeftMenu = function(){
      $mdSidenav('left').toggle();
      $scope.showProjectList = false;
   };
}


