angular.module('starter.controllers', [])


.controller('PlannerCtrl', function($scope,Task) {
        
 $scope.name="name";
  $scope.tasks = [{name: 'Go to Gym',added: new Date()},
                  {name: 'Meet Misty',added: new Date()}, 
                  {name: 'Become Pokemon Champion',added: new Date()}];
  $scope.addTask = function (taskName) {
   $scope.task.push({
      name: taskName
   });
   $scope.taskName = "";
 };
  
 $scope.removeTask = function (index) {
   $scope.tasks.splice(index, 1);
 };
    
    $scope.addTask= function (taskName) {
   $scope.tasks.push({
      name: taskName,
      added: new Date()
   });

   $scope.taskName = "";
   $scope.data = data;
};
});

