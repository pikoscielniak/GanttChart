/*global angular*/

var app = angular.module('project', ['project.controllers', 'project.services', 'project.filters', 'project.directives']).
    config(function ($routeProvider) {
        "use strict";

        $routeProvider.
            when("/", {controller: 'dhxGanntChart', templateUrl: "view/dhxGantt/index.html"}).
            when("/dhxGannt", {controller: 'dhxGanttChart', templateUrl: "view/dhxGantt/index.html"}).
            otherwise({redirectTo: "/"});

    });

angular.module('project.controllers',[]);
angular.module('project.services',[]);
angular.module('project.directives',[]);
angular.module('project.filters',[]);