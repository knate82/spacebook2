angular.module("MyApp")

.controller("MyProfileController", ["$scope", "CharacterDataService", "$location", function($scope, CharacterDataService, $location) {
    
    $scope.getCharcters = function() {
        CharacterDataService.getAllCharacters().then(function(response) {
            $scope.characters = response;
            console.log($scope.characters);
        })
    }
    
    $scope.getCharcters();
    
    $scope.getPage = function(){
        console.log($scope.character);
        $location.path("/person/" + $scope.character);
    }
    
    console.log($scope.characters);
    
}])