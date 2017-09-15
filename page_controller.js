angular.module('myApp').controller('pageController', pageController);
function pageController( $scope, $mdSidenav, $http, $location){
    $scope.backgroundClass= function(path){
        if($location.path().substr(0, path.length) == path ){
            return "background-active";
        }else{
            return "";
        }
    };

    $scope.loadLists = function(){
        $http.get('pages/projects/projects.json').then(
            function(response){
                $scope.projectList = response.data.projects;
                console.log($scope.projectList);
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