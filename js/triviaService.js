var app = angular.module("kitchsinkApp");

app.service('cardService', function($http) {

    var cardName;

    this.searchCard = function(input) {

        cardName = input;

    }

    this.getCardData = function() {


        var url = "https://omgvamp-hearthstone-v1.p.mashape.com/cards/" + cardName;

        var promise = $http({
            method: "GET",
            url: url,
            headers: {
                "X-Mashape-Key": "qS4rV3axBlmsh2uYF0PUmegcuu4sp1WFpY4jsnO3oCIqgdIh3A",
                "Accept": "application/json"
            }

        });

        return promise;
        console.log(promise);
    }
});