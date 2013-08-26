/*global _,$,angular */

angular.module('project.controllers')
    .controller('fusionCharts', ['$scope',
        function ($scope) {
            "use strict";

            var myChart = new FusionCharts( "Gantt", "myChartId", "600", "400", "0", "1" );

            myChart.setJSONUrl("js/data.json");
            myChart.render("chartContainer");
        }]);