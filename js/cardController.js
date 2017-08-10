var app = angular.module("kitchsinkApp");

app.controller("cardController", function($scope, cardService) {

    $scope.cardInfo = null;

    $scope.cardSearch = function(card) {
    	$scope.cardInfo = null;
        cardService.searchCard(card);
        var promise = cardService.getCardData();
        promise.then(function successCallback(response) {
            $scope.cardInfo = response.data[0];
        }, function errorCallback(response) {
        	alert("Please enter a valid Hearthstone card name.");
        });
    }

});