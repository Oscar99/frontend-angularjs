// Javascript Code.

var angularProject = angular.module('AngularProject', []);

angularProject.filter("pictureSong", function(){
	return function(item){
		return (JSON.stringify(item)).slice(10,-18);
	};
});

angularProject.controller('SearchController', function ($scope, $http) {
  $http.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=85b8c37b1a6be5182a5ed0549c4a7400&format=json').success(function(data) {
    $scope.phones = data.tracks.track;   

 });

$scope.orderBy = function(orden){
	$scope.orderSelect = orden;
};
  
});
 
