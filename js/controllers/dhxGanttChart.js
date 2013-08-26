/*global _,$,angular */

angular.module('project.controllers')
    .controller('dhxGanttChart', ['$scope',
        function ($scope) {
            "use strict";

            var gantt = new GanttChart();
            var project1 = new GanttProjectInfo(1, "Projekt testowy", new Date(2013, 7, 11));
            var parentTask1 = new GanttTaskInfo(1, "Old code review", new Date(2013, 7, 11), 208, 50, "");


            parentTask1.addChildTask(new GanttTaskInfo(2, "Convert to J#", new Date(2013, 7, 11), 100, 40, ""));
            parentTask1.addChildTask(new GanttTaskInfo(13, "Add new functions", new Date(2013, 7, 12), 80, 90, ""));

            project1.addTask(parentTask1);


            gantt.addProject(project1);

//settings
            gantt.setImagePath("css/imgs/");
            gantt.setEditable(true);
            gantt.showContextMenu(true);


            gantt.create("gantt");

        }]);