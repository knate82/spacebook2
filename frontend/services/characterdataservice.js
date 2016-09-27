angular.module("MyApp")

.service("CharacterDataService", ["$http", function ($http) {
    var swapiUrl = "http://swapi.co/api/people";
    var search = "/?search=";
    var that = this;

    that.allCharacters = [];

    this.getCharacter = function (params) {
        console.log(params);
        return $http.get(swapiUrl + search + params).then(function (response) {
            this.person = response.data;
            console.log(this.person);
            return this.person;
        }).then(function (data) {
            return $http.get(data.homeworld).then(function (response) {
                that.person.homeworld = response.data;
                console.log(that.person)
                return that.person;
            })
        })
    }

    var pushToArr = function (characters) {
        for (var i = 0; i < characters.length; i++) {
            that.allCharacters.push(characters[i].name);
        }
    }

    this.getAllCharacters = function () {
        return $http.get(swapiUrl).then(function (response) {
            that.data = response.data;
            that.characters = that.data.results;
            pushToArr(that.characters);
            return $http.get(that.data.next)
        }).then(function (response) {
            that.data = response.data;
            that.characters = that.data.results;
            pushToArr(that.characters);
            return $http.get(that.data.next)
        }).then(function (response) {
            that.data = response.data;
            that.characters = that.data.results;
            pushToArr(that.characters);
            return $http.get(that.data.next)
        }).then(function (response) {
            that.data = response.data;
            that.characters = that.data.results;
            pushToArr(that.characters);
            return $http.get(that.data.next)
        }).then(function (response) {
            that.data = response.data;
            that.characters = that.data.results;
            pushToArr(that.characters);
            return $http.get(that.data.next)
        }).then(function (response) {
            that.data = response.data;
            that.characters = that.data.results;
            pushToArr(that.characters);
            return $http.get(that.data.next)
        }).then(function (response) {
            that.data = response.data;
            that.characters = that.data.results;
            pushToArr(that.characters);
            return $http.get(that.data.next)
        }).then(function (response) {
            that.data = response.data;
            that.characters = that.data.results;
            pushToArr(that.characters);
            return $http.get(that.data.next)
        }).then(function (response) {
            that.data = response.data;
            that.characters = that.data.results;
            pushToArr(that.characters);
            return that.allCharacters;
        })
    }

}])