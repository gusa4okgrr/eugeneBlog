angular.module('myApp').service('blogServer', ['$http', '$q', function($http, $q) {

	this.NAME = "";

	this.Authentification = function(eMail){
		var call = $q.defer();
		// console.log(eMail);
		$http.get('/accEm/' + eMail).then(function onSucces(succes){
			call.resolve(succes.data);
			// console.log(succes);
		}, function onError(error){
			call.reject(error);
		});
		return call.promise
	};

	this.Registration = function(name, surname, number, age, country, login, pass){
		$http({
			method: "post",
			url: "/createProf",
			data: {
				name: name,
				surname: surname,
				number: number,
				age: age,
				country: country,
				eMail: login,
				passWord: pass
				}
		}).then(function onSucces(succes){
			console.log(succes);
		}, function onError(error){
			console.log(error)
 		});
	};

 	this.SignUp = function(login, pass){
 		$http({
 			method: "post",
 			url: "/createAcc",
 			data: {
 				eMail: login,
 				passWord: pass
 			}
 		}).then(function onSucces(succes){
			console.log(succes);
		}, function onError(error){
			console.log(error)
 		});
		};

	this.TakeComments = function(eMail){
		var call = $q.defer();
		$http.get('/comm/' + eMail).then(function onSucces(succes){
			call.resolve(succes.data);
		}, function onError(error){
			call.reject(error);
			console.log(error);
		});
		return call.promise;
	};

	this.AddComment = function(topic, comment, eMail, author){
		$http({
			method: "post",
			url: "/createComm",
			data: {
				topic: topic,
				comment: comment,
				eMail: eMail,
				author: author
			}
		}).then(function onSucces(succes){
			console.log(succes);
		}, function onError(error){
			console.log(error);
		})
	};

	this.TakeInformation = function(eMail){
		var call = $q.defer();
		$http.get('/profile/' + eMail).then(function onSucces(succes){
			call.resolve(succes.data);
		}, function onError(error){
			call.reject(error);
			console.log(error);
		});
		return call.promise;
	};

	this.TakeAllComments = function(){
		var call = $q.defer();
		$http.get('/allComments').then(function onSucces(succes){
			call.resolve(succes.data)
		}, function onError(error){
			call.reject(error);
			console.log(error);
		});
		return call.promise
	};

	this.TakeBlogComment = function(commId){
		var call = $q.defer();
		$http.get('/blogComm/' + commId).then(function onSucces(succes){
			call.resolve(succes.data)
		}, function onError(error){
			call.reject(error);
			console.log(error);
		})
		return call.promise;
	};

	this.AddBlogComment = function(blogComment, commentId, author){
		console.log(author);
		$http({
			method: "post",
			url: "/createBlogComm",
			data: {
				blogComment: blogComment,
				commentId: commentId,
				author: author
			}
		}).then(function onSucces(succes){
			console.log(succes);
		}, function onError(error){
			console.log(error);
		})
	};
}])