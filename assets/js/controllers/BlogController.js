angular.module('myApp').
	controller('BlogController', ['$scope', 'blogServer', '$location', '$rootScope', function($scope, blogServer, $location, $rootScope) {
		$scope.newComment = {};
		blogServer.TakeAllComments().then(function onSucces(success){
			$scope.blogs = success;
		}, function onError(error){
			console.log(error);
		});

		$scope.ShowComments = function(Comm){
			$scope.id = Comm.id;
			$scope.showButton = true;
			$scope.hideAdd = false;
			blogServer.TakeBlogComment($scope.id).then(function onSucces(success){
				$scope.comments = success;
			}, function onError(error){
				console.log(error);
			});
		};

		$scope.AddComment = function(){
			blogServer.TakeInformation($rootScope.login).then(function onSucces(success){
				$scope.author = success.name;
				blogServer.AddBlogComment($scope.newComment.comm, $scope.id, $scope.author);
			}, function onError(error){
				console.log(error);
			});
			blogServer.TakeBlogComment($scope.id).then(function onSucces(success){
				$scope.comments = success;
			}, function onError(error){
				console.log(error);
			});
			$scope.hideAdd = false;
			$scope.showButton = true;
		};

		$scope.Change = function(){
			if ($rootScope.login != undefined){
				$scope.showButton = false;
				$scope.hideAdd = true;
			} else $scope.showError = true;
		}
	}])