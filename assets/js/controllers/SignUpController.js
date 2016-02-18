angular.module('myApp').

	controller('SignUpController', ['$scope', '$http', 'blogServer', '$location', '$rootScope', 
		function($scope, $http, blogServer, $location, $rootScope){
		
		if($rootScope.login != undefined) $location.path('/homePage');
		$scope.user = {};
		$scope.ErrName = false;
		$scope.ErrSurname = false;
		$scope.ErrNumber = false;
		$scope.ErrAge = false;
		$scope.ErrCountry = false;
		$scope.ErrEmail = false;
		$scope.ErrPassword = false;
		$scope.falsy = function(){
			if($scope.ErrName === true) $scope.ErrName = false;
			if($scope.ErrSurname === true) $scope.ErrSurname = false;
			if($scope.ErrNumber === true) $scope.ErrNumber = false;
			if($scope.ErrAge === true) $scope.ErrAge = false;
			if($scope.ErrCountry === true) $scope.ErrAge = false;
			if($scope.ErrEmail === true) $scope.ErrEmail = false;
			if($scope.ErrPassword === true) $scope.ErrPassword = false;
		}
		$scope.Registrate = function(){  
			if($scope.name === undefined) $scope.ErrName = true; else $scope.ErrName = false;
			if($scope.surname === undefined) { $scope.ErrSurname = true;} else $scope.ErrSurname = false;
			if($scope.number === undefined) { $scope.ErrNumber = true;}else $scope.ErrNumber = false;
			if($scope.age === undefined) { $scope.ErrAge = true;} else $scope.ErrAge = false;
			if($scope.country === undefined) { $scope.ErrCountry = true;} else $scope.ErrCountry = false;
			if($scope.login === undefined) { $scope.ErrEmail = true;} else $scope.ErrEmail = false;
			if($scope.pass === undefined) { $scope.ErrPassword = true;}else $scope.ErrPassword = false;
			if($scope.name != undefined && $scope.surname != undefined && $scope.number != undefined && $scope.age != undefined
				 && $scope.country != undefined && $scope.login != undefined && $scope.pass != undefined){
				blogServer.Registration($scope.name, $scope.surname, $scope.number, $scope.age, 
					$scope.country, $scope.login, $scope.pass);
				blogServer.SignUp($scope.login, $scope.pass);
				$rootScope.login = $scope.login;
				blogServer.NAME = $scope.name; 
				$location.path('/homePage');
			}
		}
	}])