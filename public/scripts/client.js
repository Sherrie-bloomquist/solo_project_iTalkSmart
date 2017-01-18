console.log('js');

var myApp = angular.module('myApp', []);

myApp.controller('HomeController', ['$scope', '$http', function($scope, $http){
  console.log('NG');

  $scope.getInterview = function (){
    console.log('returning question', $scope.question);
    $http({
      method: "GET",
      url: '/question'
    }).then(function(response){
      console.log('back from get call:', response);
      $scope.questionResults = response.data;
    });//end http GET call

  };//end getQuestion

  $scope.postInterview = function(){
    console.log('in postInterview');
    var newInterview = {
      question: $scope.interview
    }; //end newQuestion object
    console.log('newInterview', newInterview);

    //make http call to database to send new question
    $http({
      method: 'POST',
      url: '/interview',
      data: newInterview
    });
    // $scope.getInterview();
  };//end postQuestion

}]);//end HomeController
