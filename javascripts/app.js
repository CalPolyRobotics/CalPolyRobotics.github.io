angular.module('firstApplication', ['ngMaterial'])
         .controller('pageController', pageController )
         .config(['$mdThemingProvider', function($mdThemingProvider){
            $mdThemingProvider.theme('pageTheme')
               .primaryPalette('blue')
               .accentPalette('cyan')
               .warnPalette('red');
            $mdThemingProvider.setDefaultTheme('pageTheme');
         }]);

      function pageController( $scope, $mdSidenav, $http){
         $scope.loadLists = function(){
            $http.get('docs/projects.json').then(
               function(response){
                  $scope.projectList = response.data.projects;
               },
               function(response){
                  window.alert( "Something Went Wrong :(");
               });
         };

         $scope.openLeftMenu = function(){
            $mdSidenav('left').toggle();
         };
      }
