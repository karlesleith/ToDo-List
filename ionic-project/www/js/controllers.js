angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('PlannerCtrl', function($scope, Task) {
    $scope.tasks = Task.data.tasks;
    var data = {
        task: ""
    };
    
    function addTask(){
        Task.addTask(data.task);
        console.log(data.task);
    }
    
    $scope.addTask = addTask;
    $scope.data = data;
})

.controller('SettingsCtrl', function($scope) {
});
