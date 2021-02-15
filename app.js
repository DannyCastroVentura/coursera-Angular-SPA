(() => {

    'use strict';

    angular.module('myFirstApp', [])

    .controller('MyFirstController', ($scope) => {
        $scope.name = "Daniel";
        $scope.sayHello = () => {
            return "Hello Coursera!";
        }
    });

})();