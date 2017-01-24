

var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/home', {
    templateUrl: 'views/partials/home.html',
  })
  .when('/play', {
      templateUrl: 'views/partials/play.html',
      controller: 'AdminController'
  })
  .when('/admin', {
      templateUrl: 'views/partials/admin.html',
      controller: 'AdminController'
  })
  .otherwise({
      redirectTo: 'home'
  }); //end routes
}]);



myApp.controller('AdminController', ['$scope', '$http', function($scope, $http){

  $scope.login = function(){
    var userInfo = {
      username: $scope.username,
      password: $scope.password
    };
    $http({
      method: 'POST',
      url: '/',
      data: userInfo
    }).then(function successCallback(response) {
       $scope.loggedIn=response.data;
    }, function errorCallback(error) {
      alert('you are not a registered administrator');
      $scope.username='';
      $scope.password='';

  });
  };



  $scope.getInterview = function (){
    console.log('returning interview question', $scope.question);
    $http({
      method: "GET",
      url: '/interview'
    }).then(function(response){
      console.log('back from interview get call:', response);
      $scope.interviewResults = response.data;
    });//end http GET call
  };//end getInterview question

//   db.mycoll.aggregate(
//    { $sample: { size: 1 } }
// )


    $scope.getSpeech = function (){
      console.log('returning speech question', $scope.question);
      $http({
        method: "GET",
        url: '/speech'
      }).then(function(response){
        console.log('back from speech get call:', response);
        $scope.speechResults = response.data;
      });//end http GET call

  };//end getSpeech

  $scope.postInterview = function(){
    console.log('in postInterview');
    var newInterview = {
      question: $scope.questions.interview
    }; //end newQuestion object
    console.log('newInterview', newInterview);
    $scope.questions.interview = '';
    //make http call to database to send new interview question
    $http({
      method: 'POST',
      url: '/interview',
      data: newInterview
    });

  };//end postInterview

  $scope.postSpeech = function(){
    console.log('in postSpeech');
    var newSpeech = {
      question: $scope.questions.speech
    }; //end newSpeech object
    console.log('newSpeech', newSpeech);
    $scope.questions.speech = '';
    //make http call to database to send new speech question
    $http({
      method: 'POST',
      url: '/speech',
      data: newSpeech
    });
  };//end postSpeech
  $scope.questions = {};
}]);//end AdminController
