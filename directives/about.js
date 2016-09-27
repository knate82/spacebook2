angular.module("MyApp")

.directive("peopleInfo", function(){
    return {
        templateUrl: "/templates/directivepeopleinfo.html",
        restrict: "E",
        scope: {
            data: "="
        }
    }
})