angular.module('myApp').
	controller('HomePageController', ['$scope', '$rootScope', '$location', 'blogServer', 
	function($scope, $rootScope, $location, blogServer) {
		if ($rootScope.login === undefined) $location.path('/logIn');
		$scope.empty = false;
		$scope.full = true;
		$scope.createComm = false;
		if(blogServer.NAME === "") {
			blogServer.TakeInformation($rootScope.login).then(function onSuccess(success){
				$scope.Name = success.name;
			}, function onError(error){
				console.log(error);
			})} else $scope.Name = blogServer.NAME;
		blogServer.TakeComments($rootScope.login).then(function onSuccess(success){
			if (success.length === 0) {
				$scope.empty = true;
				$scope.full = false;
			}
			$scope.comments = success; 
		}, function onError(error){
			console.log(error);
		});

		$scope.addComment = function(){
			blogServer.AddComment($scope.newTopic, $scope.newComment, $rootScope.login, $scope.Name);
			blogServer.TakeComments($rootScope.login).then(function onSuccess(success){
				$scope.comments = success;
				if(success.length != 0){
					$scope.empty = false;
					$scope.full = true;
				}	
			}, function onError(error){
				console.log(error);
			})
			$scope.createComm = false;	
		};

		$scope.createComment = function(){
			if($scope.createComm === false) $scope.createComm = true; else $scope.createComm = false;
		}
	}])