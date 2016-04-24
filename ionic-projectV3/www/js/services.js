angular.module('starter.services', [])

.factory('Task', function() {
  
  var data = {
    tasks: [
      { id: 0,
        title: "Buy groceries", 
       added: new Date()}
      , {id: 1,
         title: "Clean dog", 
         added: new Date()}
         , {id: 2,
         title: "Go To Gym", 
         added: new Date()}
    ]
  };
  
  function addTask(title) {
    data.tasks.push({id: data.tasks.length+1, title: title, 
                     added: new Date()});
  }
  
  return {
    data: data
    , addTask: addTask
  };
});