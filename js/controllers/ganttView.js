/*global _,$,angular */

angular.module('project.controllers')
    .controller('ganttView', ['$scope',
        function ($scope) {
            "use strict";

            $("#ganttChart").ganttView({
                data: ganttData,
                slideWidth: 700,
                behavior: {
                    onClick: function (data) {
                        var msg = "You clicked on an event: { start: " + data.start.toString("M/d/yyyy") + ", end: " + data.end.toString("M/d/yyyy") + " }";
                        $("#eventMessage").text(msg);
                    },
                    onResize: function (data) {
                        var msg = "You resized an event: { start: " + data.start.toString("M/d/yyyy") + ", end: " + data.end.toString("M/d/yyyy") + " }";
                        $("#eventMessage").text(msg);
                    },
                    onDrag: function (data) {
                        var msg = "You dragged an event: { start: " + data.start.toString("M/d/yyyy") + ", end: " + data.end.toString("M/d/yyyy") + " }";
                        $("#eventMessage").text(msg);
                    }
                }
            });

            $("#ganttChart").ganttView("setSlideWidth", 600);

        }]);