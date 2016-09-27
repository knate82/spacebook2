angular.module("MyApp")

.service("SuggestService", function(){
    
    this.people = [
        {
            name: "Luke Skywalker",
            html: "./luke/luke.html",
            image: "/luke/luke-profile-pic.jpg",
        }, {
            name: "Princess Leia",
            html: "./leia/leia.html",
            image: "/leia/Princess-Leia-profile-pic.jpg"
        }, {
            name: "Master Yoda",
            html: "./yoda/yoda.html",
            image: "/yoda/Yoda-profile-pic.jpg"
        }, {
            name: "Darth Vader",
            html: "./vader/vader.html",
            image: "/vader/darth-vader-profile.jpg",
        }, {
            name: "Han Solo",
            html: "./solo/solo.html",
            image: "/solo/Hansolo-profile-pic.jpg"
        }, {
            name: "Chewbacca",
            html: "./chewy/chewy.html",
            image: "chewy/chewbacca-profile-pic.jpg"
        }
    ];
    
    this.getSuggestions = function() {
        var suggestedFriends = [];
        
        for(var i = 0; i < 3; i++){
            suggestedFriends.push(this.people[Math.floor(Math.random() * 6) + 0]);
        }
        return suggestedFriends;
    }
    
})