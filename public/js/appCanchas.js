var appFutbol = angular.module('appFutbol', []);

appFutbol.controller('mainController', ['$scope', '$http', function($scope, $http) {
    $scope.formData = {};

    $http.get('/api/canchas/')
        .success(function(data) {
            $scope.canchas = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.createCancha = function() {
        $http.post('/api/canchas/', $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $http.get('/api/canchas/')
                    .success(function(data) {
                        $scope.canchas = data;
                        console.log(data);
                    })
                    .error(function(data) {
                        console.log('Error: ' + data);
                    });
            })
            .error(function(data) {
                console.log('Error: ' + data);  
            });
    };

    $scope.deleteCancha = function(id) {
        $http.delete('/api/canchas/' + id)
            .success(function(data) {
                $http.get('/api/canchas/')
                    .success(function(data) {
                        $scope.canchas = data;
                        console.log(data);
                    })
                    .error(function(data) {
                        console.log('Error: ' + data);
                    });
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
}]);