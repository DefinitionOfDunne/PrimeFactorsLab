(function() {

    var app = angular.module("kitchsinkApp");

    app.factory("primeFactorsService", function() {

        function setPrimeFactors(inputNumber) {
            var factors = [];
            for (var i = 2; i <= inputNumber; i++) {
                while ((inputNumber % i) === 0) {
                    factors.push(i);
                    inputNumber /= i;
                }
            }
            return factors;
        };

        return {
            setPrimeFactors: setPrimeFactors
        };

    });

})();