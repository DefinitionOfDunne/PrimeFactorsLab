var app = angular.module("kitchsinkApp");

app.controller("cardController", function($scope, cardService) {

    $scope.cardInfo = [];

    $scope.cardSearch = function(card) {
        cardService.searchCard(card);
        var promise = cardService.getCardData();
        promise.then(function successCallback(response) {
            $scope.cardInfo = response.data;
            console.log(response.data[0].artist);
        }, function errorCallback(response) {
        	alert("Please enter a valid Hearthstone card name.");
        });
    }

});