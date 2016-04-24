angular.module('starter.controllers', [])


.controller('PlannerCtrl', function($scope,Task) {
        //Array of Tasks containing the name and date added
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
  //function to remove Task
 $scope.removeTask = function (index) {
   $scope.tasks.splice(index, 1);
 };
    //function to add task to the array
    $scope.addTask= function (taskName) {
   $scope.tasks.push({
      name: taskName,
      added: new Date()
   });

   $scope.taskName = "";
   $scope.data = data;
};
});

