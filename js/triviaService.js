var app = angular.module("kitchsinkApp");

app.service('triviaService', function($http) {
    
    this.getTriviaData = function() {
        
        var url = "https://qriusity.com/v1/categories/21/questions?page=1&limit=20";

        var promise = $http.get(url);

        return promise;
    }
});
