angular.module("MyApp")

.directive("insideNav", function(){
    return {
        templateUrl: "/templates/directiveinsidenav.html",
        restrict: "E",
        scope: {
            nav: "="
        }
    }
})