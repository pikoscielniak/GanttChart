/*global _,$,angular */

angular.module('project.controllers')
    .controller('dojoToolkit', ['$scope',
        function ($scope) {
            "use strict";

            require([
                "dojo/_base/declare",
                "dojo/parser",
                "dojo/query",
                "dojox/gantt/GanttChart",
                "dojox/gantt/GanttProjectItem",
                "dojox/gantt/GanttTaskItem",
                "dojo/dom",
                "dojo/domReady!"
            ], function(declare, parser, query, GanttChart, GanttProjectItem, GanttTaskItem, dom){
                var projectDev = new GanttProjectItem({
                    id: 1,
                    name: "Development Project",
                    startDate: new Date(2012, 5, 11)
                });

                var taskRequirement = new GanttTaskItem({
                    id: 1,
                    name: "Requirement",
                    startTime: new Date(2012, 5, 11),
                    duration: 50,
                    percentage: 50,
                    taskOwner: "Jack"
                });
                var taskAnalysis = new GanttTaskItem({
                    id: 2,
                    name: "Analysis",
                    startTime: new Date(2012, 5, 18),
                    duration: 40,
                    percentage: 80,
                    previousTaskId: "1",
                    taskOwner: "Michael"
                });
                var taskDesign = new GanttTaskItem({
                    id: 3,
                    name: "Design",
                    startTime: new Date(2012, 5, 18),
                    duration: 60,
                    percentage: 80,
                    previousTaskId: "1",
                    taskOwner: "Jason"
                });
                var taskDetailDesign = new GanttTaskItem({
                    id: 4,
                    name: "Detail design",
                    startTime: new Date(2012, 5, 18),
                    duration: 30,
                    percentage: 50,
                    previousTaskId: "1",
                    taskOwner: "Michael"
                });
                var taskDevelopmentDoc = new GanttTaskItem({
                    id: 5,
                    name: "Development doc",
                    startTime: new Date(2012, 5, 20),
                    duration: 20,
                    percentage: 10,
                    previousTaskId: "1",
                    taskOwner: "Rock;Jack"
                });

                projectDev.addTask(taskRequirement);
                projectDev.addTask(taskAnalysis);
                projectDev.addTask(taskDesign);
                projectDev.addTask(taskDetailDesign);
                projectDev.addTask(taskDevelopmentDoc);

                var taskSketch = new GanttTaskItem({
                    id: 6,
                    name: "Sketch",
                    startTime: new Date(2012, 6, 1),
                    duration: 20,
                    percentage: 50,
                    previousTaskId: "3",
                    taskOwner: "Rock"
                });
                var taskPrototype = new GanttTaskItem({
                    id: 7,
                    name: "Prototype",
                    startTime: new Date(2012, 6, 6),
                    duration: 60,
                    percentage: 80,
                    previousTaskId: "6",
                    taskOwner: "Rock"
                });
                var taskImplementation = new GanttTaskItem({
                    id: 8,
                    name: "Implementation",
                    startTime: new Date(2012, 6, 6),
                    duration: 30,
                    percentage: 80,
                    previousTaskId: "6",
                    taskOwner: "Jason"
                });
                var taskDetailImplement = new GanttTaskItem({
                    id: 9,
                    name: "Detail Implement",
                    startTime: new Date(2012, 6, 17),
                    duration: 120,
                    percentage: 50,
                    previousTaskId: "7",
                    taskOwner: "Jason"
                });
                var taskDeliver = new GanttTaskItem({
                    id: 10,
                    name: "Deliver",
                    startTime: new Date(2012, 6, 18),
                    duration: 100,
                    percentage: 30,
                    previousTaskId: "8",
                    taskOwner: "Michael;Jason"
                });

                projectDev.addTask(taskSketch);
                projectDev.addTask(taskPrototype);
                projectDev.addTask(taskImplementation);
                projectDev.addTask(taskDetailImplement);
                projectDev.addTask(taskDeliver);

                // Create Gantt control
                var ganttChart = new GanttChart({
                    //readOnly: true,			//optional: gantt chart editable
                    //dataFilePath: "gnt.json",	//optional: json data file path for load and save, default is "gantt_default.json"
                    //withTaskId: false,		//optional: if true, task id will be on the right of task name, default value is !readOnly.
                    //animation: false,			//optional: whether you need animation when changing granularity of time line
                    height: 400,				//optional: chart height in pixel, default is 400px
                    width: 800,				//optional: chart width in pixel, default is 600px
                    withResource: true			//optional: with the resource chart or not
                }, "gantt"); 					//"gantt" is the node container id of gantt chart widget

                // Add project data to gantt chart widget
                ganttChart.addProject(projectDev);

                // Initialize and Render
                ganttChart.init();
            });

        }]);