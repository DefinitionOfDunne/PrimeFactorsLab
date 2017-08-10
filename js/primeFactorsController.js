(function() {

    var app = angular.module("kitchsinkApp");

    app.controller("primeFactorsController", function($scope, $timeout, primeFactorsService) {

	    $scope.factors = [];

        $scope.setFactors = function(num) {
        	var holder = primeFactorsService.setPrimeFactors(num);
            $scope.factors = [];
            //setTimeout...
            // $timeout(function() {
        	holder.forEach(function(factor) {
        		$timeout(function() {
        			$scope.factors.push(factor);
        		}, 250);
            });
	        // }, 250);
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


// (function() {
// var app = angular.module("madlibApp");

// app.controller("inputController", function($scope, $location, madlibService) {
// 	$scope.labels = ["Proper Name", "Location", "Adjective", "Animal", "Animals (Plural)",
// 	"Proper Name (new name)", "Verb"];
// 	$scope.values = [];
// 	$scope.madlibsArr = [];

// 	$scope.madlibMaker = function() {
//     	for (var i = 0; i < $scope.labels.length; i++) {
//     		$scope.madlibsArr.push({
//     			label: $scope.labels[i],
//     			value: $scope.values[i]
//     		});
//     	}
// 		madlibService.setMadlibs($scope.madlibsArr);
// 		$location.path('/madlibdisplay');
// 	}
// });

// })();