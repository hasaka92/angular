/**
 * Created by hasaka on 2/3/17.
 */


var myapp = angular.module("myModule4",[])
    .controller("myController4",function ($scope) {
        var technologies = [
            {name:"Java", like:0, dislike:0},
            {name:"C#", like:0, dislike:0},
            {name:"JSP", like:0, dislike:0},
            {name:"Asp.net", like:0, dislike:0},
            {name:"Angular", like:0, dislike:0},
        ];

        $scope.tech = technologies;

        $scope.incrementLike = function (technology) {
            technology.like++;
        }

        $scope.incrementDislike = function (technology) {
            technology.dislike++;
        }
    });