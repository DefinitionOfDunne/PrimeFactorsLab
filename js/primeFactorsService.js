(function () {

var app = angular.module("kitchsinkApp");

app.factory("primeFactorsService", function() {
	var factors = [];
	var i;

	function setPrimeFactors(inputNumber) {
		for (i = 2; i <= inputNumber; i++) {
			while ((inputNumber % i) === 0) {
				factors.push(i);
				inputNumber /= i;
			}
		}
	};

	function getPrimeFactors() {
		return factors;
	};

	return {
		setPrimeFactors: setPrimeFactors,
		getPrimeFactors: getPrimeFactors
	};

});

})();