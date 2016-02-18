app.controller('LogOutCtrl', ['$rootScope', '$scope', '$location', function($scope, $rootScope, $location) {
	$scope.logOut = function(){
		console.log($rootScope.login);
		$rootScope.login = undefined;
		console.log($rootScope.login);
		$location.path('/logIn');
	}
}])