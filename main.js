var app = angular.module('jsonApp', []);
app.controller('jsonCtrl', function($scope, $http) {
	$scope.wikipediaEntry = "";
	$scope.getEntryInfo = function() {
		if($scope.wikipediaEntry !== "") {
			var url = "https://en.wikipedia.org/w/api.php?action=query&titles=" +
					$scope.wikipediaEntry +
					"&prop=revisions&rvprop=content&format=json";
			alert(url);
		}
		return "Entry Info: " + $scope.wikipediaEntry;
	}
});
