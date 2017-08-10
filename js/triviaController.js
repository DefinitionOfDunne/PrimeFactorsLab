var app = angular.module("kitchsinkApp");

app.controller("triviaController", function($scope, triviaService) {

    $scope.triviaQuestions = [];

    var promise = triviaService.getTriviaData();
    	promise.then(function(response) {
        $scope.questions = response.data;
    });

});