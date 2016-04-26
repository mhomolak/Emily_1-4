var app = angular.module('comicBux', []);

app.controller('ComicBookController', function($scope) {
  $scope.comicBook = "Xmen"
  $scope.subject = "Batdood"
  $scope.tellMe = function(){
    return "OMG I love " + $scope.comicBook
  }
});
