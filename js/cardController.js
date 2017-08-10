var app = angular.module("kitchsinkApp");

app.controller("cardController", function($scope, cardService) {

    $scope.cardInfo = [];

    $scope.cardSearch = function(card) {
        cardService.searchCard(card);
        var promise = cardService.getCardData();
        promise.then(function(response) {
            $scope.cardInfo = response.data;
            console.log(response.data[0].artist);
        });
    }

});