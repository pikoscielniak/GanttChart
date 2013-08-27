/*global angular*/

var app = angular.module('project', ['project.controllers', 'project.services', 'project.filters', 'project.directives']).
    config(function ($routeProvider) {
        "use strict";

        $routeProvider.
            when("/", {controller: 'dhxGanttChart', templateUrl: "view/dhxGantt/index.html"}).
            when("/dhxGantt", {controller: 'dhxGanttChart', templateUrl: "view/dhxGantt/index.html"}).
            when("/ganttView", {controller: 'ganttView', templateUrl: "view/ganttView/index.html"}).
            when("/fusionCharts", {controller: 'fusionCharts', templateUrl: "view/fusionCharts/index.html"}).
            when("/dojoToolkit", {controller: 'dojoToolkit', templateUrl: "view/dojoToolkit/index.html"}).
            otherwise({redirectTo: "/"});

    });

angular.module('project.controllers',[]);
angular.module('project.services',[]);
angular.module('project.directives',[]);
angular.module('project.filters',[]);