var seconds = 0;

var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'countdown']);

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



myApp.controller('AdminController', ['$scope', '$http', "CountdownTimer", "$timeout", function($scope, $http, CountdownTimer, $timeout){

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
      swal({
        title:"you are not a registered administrator",
        type: "warning",
        closeOnConfirm: true});
      $scope.username='';
      $scope.password='';
    });
  };

  $scope.logout = function(){
    location.reload();
  };


  $scope.getInterview = function (){
     swal('Relax, Be Confident, Be Yourself');

    $http({
      method: "GET",
      url: '/interview'
    }).then(function(response){
      interview = response.data;
      var randomInterview = interview[Math.floor(Math.random()*interview.length)];
      $scope.interviewResults = randomInterview.question;
    });//end http GET call

  };//end getInterview question



    $scope.getSpeech = function (){
      swal('Stand tall, smile, and be ok with the silent pauses');
      $http({
        method: "GET",
        url: '/speech'
      }).then(function(response){
        speech = response.data;
        var randomSpeech = speech[Math.floor(Math.random()*speech.length)];
        $scope.speechResults = randomSpeech.question;

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
