var app = angular.module('Todo', []);

app.controller(
  'TodoCtrl', function($scope) {
  $scope.newTodo = '';

  $scope.todos = [
    'Partner Company Stand-Up',
    'Cohort Stand-Up',
    'Do some serious coding'
  ];

  $scope.done = function(todo) {
    var indexOf = $scope.todos.indexOf(todo);
    if (indexOf !== -1) {
      $scope.todos.splice(indexOf, 1);
    }
  };

  $scope.add = function(e) {
    if (e.which && e.which ===13) {
      $scope.todos.push($scope.newTodo);
      $scope.newTodo = ''
    }
  };

});

// app.controller(
//    'TodoCtrl', 
//    ['$scope', function($scope1) {
//        $scope1.todo1 = 'Learn Sketch';
//        $scope1.todo2 = 'Look at Dribble and feel cool';
//        $scope1.todo3 = 'Actually learn how to use the Pen tool';
//     }]
// );