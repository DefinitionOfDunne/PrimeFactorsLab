(function () {

var app = angular.module("kitchsinkApp", ["ngRoute"]);

app.config(function($routeProvider) {
	// $routeProvider.when("/hearthstone", {
	// 	templateUrl: "views/hearthstone.html",
	// 	controller: "hearthstoneController"
	// });

	$routeProvider.when("/trivia", {
		templateUrl: "views/trivia.html",
		controller: "triviaController"
	});

	$routeProvider.when("/primefactors", {
		templateUrl: "views/primefactors.html",
		contorller: "primeFactorsController"
	});

	$routeProvider.otherwise({
		template: "Please select an option from the links above."
	});


});

})();