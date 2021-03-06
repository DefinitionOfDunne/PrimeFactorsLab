(function() {

    var app = angular.module("kitchsinkApp");

    app.controller("primeFactorsController", function($scope, $timeout, primeFactorsService) {

	    $scope.factors = [];

        $scope.setFactors = function(num) {
        	var holder = primeFactorsService.setPrimeFactors(num);
            $scope.factors = [];
            //setTimeout...
        	holder.forEach(function(factor) {
        		$timeout(function() {
        			$scope.factors.push(factor);
        		}, 250);
            });
        }

        $scope.removeDivs = function() {
        	for (var i = 0; i <= $scope.factors.length; i++) {
	        	var el = angular.element(document.querySelector(".primeFactors"));
	        	el.remove();
	        	console.log("Hey");
	        }
        }

        $scope.allTheFunctions = function(num) {
        	$scope.removeDivs();
        	$scope.setFactors(num);
        }
    })

})();