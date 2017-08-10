(function() {

    var app = angular.module("kitchsinkApp", ["ngRoute"]);

    app.config(function($routeProvider) {

        $routeProvider.when("/trivia", {
            templateUrl: "views/trivia.html",
            controller: "cardController"
        });

        $routeProvider.when("/primefactors", {
            templateUrl: "views/primefactors.html",
            controller: "primeFactorsController"
        });

        $routeProvider.otherwise({
            template: "Please select an option from the links above."
        });


    });

})();