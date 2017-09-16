// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'ngMaterial'
]);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/main'});
}]);

// Route Configuration
app.config(function($routeProvider) {
    $routeProvider
        .when("", {
            templateUrl : "pages/main.htm"
        })
        .when("/main", {
            templateUrl : "pages/main.htm"
        })
        .when("/projects", {
            templateUrl : "pages/projects.htm"
        })
        .when("/store", {
            templateUrl : "pages/store.htm"
        })
        .when("/calendar", {
            templateUrl : "pages/calendar.htm"
        })
        .when("/contact", {
            templateUrl : "pages/contact.htm"
        })
        .when("/about", {
            templateUrl : "pages/about.htm"
        })
        .when("/mailing", {
            templateUrl : "pages/mailing.htm"
        })
        .when("/projects/:name",{
            templateUrl : function($routeParams) {
                return "pages/projects/" + $routeParams.name;
            }
        });

});

app.controller('AppCtrl', function($scope, $mdToast) {
    var last = {
        bottom: false,
        top: true,
        left: false,
        right: true
    };

    $scope.toastPosition = angular.extend({},last);

    $scope.getToastPosition = function() {
        sanitizePosition();

        return Object.keys($scope.toastPosition)
            .filter(function(pos) { return $scope.toastPosition[pos]; })
            .join(' ');
    };

    function sanitizePosition() {
        var current = $scope.toastPosition;

        if ( current.bottom && last.top ) current.top = false;
        if ( current.top && last.bottom ) current.bottom = false;
        if ( current.right && last.left ) current.left = false;
        if ( current.left && last.right ) current.right = false;

        last = angular.extend({},current);
    }

    $scope.showSimpleToast = function() {
        var pinTo = $scope.getToastPosition();

        $mdToast.show(
            $mdToast.simple()
                .textContent('Simple Toast!')
                .position(pinTo )
                .hideDelay(3000)
        );
    };

    $scope.showActionToast = function() {
        var pinTo = $scope.getToastPosition();
        var toast = $mdToast.simple()
            .textContent('Marked as read')
            .action('UNDO')
            .highlightAction(true)
            .highlightClass('md-accent')// Accent is used by default, this just demonstrates the usage.
            .position(pinTo);

        $mdToast.show(toast).then(function(response) {
            if ( response == 'ok' ) {
                alert('You clicked the \'UNDO\' action.');
            }
        });
    };

})

    app.controller('ToastCtrl', function($scope, $mdToast) {
        $scope.closeToast = function() {
            $mdToast.hide();
        };
    });