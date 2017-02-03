/**
 * Created by hasaka on 2/2/17.
 */

var myapp = angular.module("myModule",[])
    .controller("myController",function ($scope) {

        var employee ={
            firstName : "Hasa",
            lastName : "Malale",
            sex : "Male"

        };

        $scope.emp =employee;
    });


