/**
 * Created by miralemcebic on 30/01/16.
 */
angular.module('templateStore.templates', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/templates', {
            templateUrl:  'templates/templates.html',
            controller: 'TemplatesCtrl'
    });
}])

.controller('TemplatesCtrl', ['$scope', function($scope) {

    console.log("Templates working");
    console.log($scope);
}]);