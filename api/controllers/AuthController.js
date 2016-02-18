module.exports = {

	addLogIn: function(req, res){
		LogInModel.create({
			eMail: req.param("eMail"),
			passWord : req.param("passWord")
		}).exec(function(err, data){
			// console.log(res.json(data));
			res.json(data);
		})
	},

	getAccounts: function(req, res){
		LogInModel.find().exec(function(err, data){
			res.json(data);
		})
	},

	deleteAccount: function(req, res){
		LogInModel.destroy({
			id: req.param('id')
		}).exec(function(err, data){
			console.log('Deleted');
			res.json(data);
		})
	},

	findAccount: function(req, res){
		LogInModel.findOne({
			id: req.param('id')
		}).exec(function(err, data){
			res.json(data);
			console.log(data);
			console.log(err);
		})
	},

	findEmail: function(req, res){
		LogInModel.findOne({
			eMail: req.param('eMail')
		}).exec(function(err, data){
			res.json(data);
			console.log(err);
		})
	},

	findPassword: function(req, res){
		LogInModel.findOne({
			passWord: req.param('passWord')
		}).exec(function(err, data){
			res.json(data);
			// console.log(err);
		})
	},

	getProfiles: function(req, res){
		Profile.find().exec(function(err, data){
			res.json(data);
			// console.log('succes');
		})
	},

	addProfile: function(req, res){
		Profile.create({
			name: req.param('name'),
			surname: req.param('surname'),
			number: req.param('number'),
			age: req.param('age'),
			country: req.param('country'),
			eMail: req.param('eMail'),
			passWord: req.param('passWord'),
		}).exec(function(err, data){
			res.json(data);
			// console.log('succes');
			// console.log(err);
		})
	},

	getProfile: function(req, res){
		Profile.findOne({
			eMail: req.param('eMail')
		}).exec(function(err, data){
			res.json(data);
			// console.log(err);
		})
	},

	deleteProfile: function(req, res){
		Profile.destroy({
			id: req.param('id')
		}).exec(function(err, data){
			// console.log('Deleted');
			res.json(data);
		})
	},

	addComment: function(req, res){
		Comment.create({
			topic: req.param('topic'),
			comment: req.param('comment'),
			eMail: req.param("eMail"),
			author: req.param('author')
		}).exec(function(err, data){
			// console.log(res.json(data));
			res.json(data);
		})
	},

	findComments: function(req, res){
		Comment.find({
			eMail: req.param('eMail')
		}).exec(function(err, data){
			res.json(data);
			console.log(err);
		})
	},

	getAllComments: function(req, res){
		Comment.find().exec(function(err, data){
			res.json(data);
		})
	},

	deleteComment: function(req, res){
		Comment.destroy({
			id: req.param('id')
		}).exec(function(err, data){
			res.json(data);
		})
	},

	addBlogComment: function(req, res){
		BlogComment.create({
			blogComment: req.param('blogComment'),
			commentId: req.param('commentId'),
			author: req.param('author')
		}).exec(function(err,data){
			console.log(err);
			res.json(data);
		})
	},

	getBlogComment: function(req, res){
		BlogComment.find({
			commentId: req.param('commentId')
		}).exec(function(err, data){
			console.log(err);
			res.json(data);
		})
	},

	deleteBlogComment: function(req, res){
		BlogComment.destroy({
			id: req.param('id')
		}).exec(function(err, data){
			console.log('Deleted');
			res.json(data);
		})
	},

	getAllBlogComments: function(req, res){
		BlogComment.find().exec(function(err, data){
			res.json(data);
		})
	},

	deleteAllComments: function(req, res){
		Comment.destroy().exec(function(err, data){
			res.json(data);
		})
	},

	deleteAllBlogComments: function(req, res){
		BlogComment.destroy().exec(function(err, data){
			res.json(data);
		})
	},
}