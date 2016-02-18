angular.module('myApp').

	controller('LogInController', ['$scope', 'blogServer', '$location', '$rootScope', function($scope, blogServer, $location, $rootScope) {
		$scope.Err = true;
		if($rootScope.login != undefined) $location.path('/homePage');
		$scope.Authentificate = function(){
			blogServer.Authentification($scope.login).then(function success(suc){
				$scope.check = suc;
				if($scope.check === "") $scope.Err = false; 
				else {
					if($scope.check.passWord === $scope.pass) {
						console.log('Success');
						$rootScope.login = $scope.login;
						$location.path('/homePage');
					}
					else $scope.Err = false;
				}
			}, function error(err){
				console.log(err);
			});
		};
	}])