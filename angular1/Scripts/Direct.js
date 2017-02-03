/**
 * Created by hasaka on 2/3/17.
 */

var myapp = angular.module("myModule1",[])
    .controller("myController1",function ($scope) {

        var country ={
            countryName : "SL",
            capital : "Japura",
            flag : "Images/sl.png"

        };

        $scope.cntry =country;
    });