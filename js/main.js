/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute',
  'vAccordion',
  'ngAnimate'
]);

/**
 * Configure the Routes
 */

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    .when("/store", {templateUrl: "partials/store.html", controller: "PageCtrl"})
    .when("/projects", {templateUrl: "partials/projects.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // Blog
    // .when("/blog", {templateUrl: "partials/blog.html", controller: "blogctrl"})
    // .when("/blog/post", {templateurl: "partials/blog_item.html", controller: "blogctrl"})
    // else 404
    .otherwise("/404", {templateurl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * controls the blog
 */
app.controller('blogctrl', function (/* $scope, $location, $http */) {
  console.log("blog controller reporting for duty.");
});

/**
 * controls all other pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("page controller reporting for duty.");

  // activates the carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // activates tooltips for social links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
}),

function headercontroller($scope, $location)
{
    $scope.isactive = function (viewlocation) {
        return viewlocation === $location.path();
    };
};

