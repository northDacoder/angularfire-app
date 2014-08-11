var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl", ["$scope", "$firebase",
  function($scope, $firebase) {
    var ref = new Firebase("https://angularfire-app.firebaseio.com/");

    // create an AngularFire reference to the data
    var sync = $firebase(ref);

    // download the data into a local object
    $scope.data = sync.$asObject();
  }
]);