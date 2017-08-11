(function() {

    var app = angular.module("kitchsinkApp", ["ngRoute", "ngAnimate"]);

    app.config(function($routeProvider) {

        $routeProvider.when("/hearthstone", {
            templateUrl: "views/card.html",
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

    app.directive("cardDetails", function() {

        return {
            templateUrl: 'views/details.html',
            replace: true
        }
    })

    app.directive("cardImage", function() {

        return {
            templateUrl: 'views/cardpic.html',
            replace: true
        }
    })

})();