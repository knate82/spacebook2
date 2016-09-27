var app = angular.module("MyApp", ["ngRoute"])

app.config(function($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: "./home/home.html",
        controller: "MainController"
    }).when("/join", {
        templateUrl: "./join/join.html",
        controller: "JoinController"
    }).when("/myprofile", {
        templateUrl: "./myprofile/myprofile.html",
        controller: "MyProfileController"
    }).when("/person/:name", {
        templateUrl: "./profile/profile.html",
        controller: "PersonProfileController"
    }).otherwise("/home", {
        templateUrl: "./home/home.html",
        controller: "MainController"
    });
})