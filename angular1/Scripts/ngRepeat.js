/**
 * Created by hasaka on 2/3/17.
 */

var myapp = angular.module("myModule3",[])
    .controller("myController3",function ($scope) {

        var employees =[
            {firstName: "Tom", lastName: "Riddle", gender: "Male", salary: 5000},
            {firstName: "Ricky", lastName: "Ponting", gender: "Male", salary: 6000},
            {firstName: "Sara", lastName: "Jasor", gender: "Female", salary: 7000},
            {firstName: "Theia", lastName: "Queen", gender: "Female", salary: 8000},
            {firstName: "Oliver", lastName: "Queen", gender: "Male", salary: 9000}
        ];

        var countries =[
            {countryName: "SL", cities: [{name: "col"},{name:"panadura"},{name:"kalutara"}]},
            {countryName: "USA", cities: [{name: "nyc"},{name:"ar51"},{name:"seattle"}]},
            {countryName: "UK", cities: [{name: "london"},{name:"manchester"},{name:"berminham"}]},
        ];

        $scope.emps =employees;
        $scope.country = countries;
    });