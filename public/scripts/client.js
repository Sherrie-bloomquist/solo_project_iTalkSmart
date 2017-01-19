console.log('js');

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/home', {
    templateUrl: 'views/partials/home.html',
    controller: ''
  })
  .when('/play', {
      templateUrl: 'views/partials/play.html',
      controller: ''
  })
  .when('/admin', {
      templateUrl: 'views/partials/admin.html',
      controller: 'AdminController'
  })
  .otherwise({
      redirectTo: 'home',
  }); //end routes
}]);

myApp.controller('AdminController', ['$scope', '$http', function($scope, $http){
  console.log('NG');

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


    $scope.getSpeech = function (){
      console.log('returning speech question', $scope.question);
      $http({
        method: "GET",
        url: '/speech'
      }).then(function(response){
        console.log('back from speech get call:', response);
        $scope.speechResults = response.data;
      });//end http GET call

  };//end getInterview

  $scope.postInterview = function(){
    console.log('in postInterview');
    var newInterview = {
      question: $scope.interview
    }; //end newQuestion object
    console.log('newInterview', newInterview);

    //make http call to database to send new interview question
    $http({
      method: 'POST',
      url: '/interview',
      data: newInterview
    });
    // $scope.getInterview();
  };//end postInterview

  $scope.postSpeech = function(){
    console.log('in postSpeech');
    var newSpeech = {
      question: $scope.speech
    }; //end newSpeech object
    console.log('newSpeech', newSpeech);

    //make http call to database to send new speech question
    $http({
      method: 'POST',
      url: '/speech',
      data: newSpeech
    });
  };//end postSpeech

}]);//end AdminController
