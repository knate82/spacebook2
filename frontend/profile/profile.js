var app = angular.module("MyApp")

.controller("PersonProfileController", ["$scope", "CharacterDataService", "$routeParams", function($scope, CharacterDataService, $routeParams){
    var params = $routeParams;
    console.log(params);
    
    $scope.getCharcter = function(){
        CharacterDataService.getCharacter(params).then(function(response){
            $scope.character = response;
        })
    }
}])