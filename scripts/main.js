(function(){
	window.iSocket = window.iSocket || {}
	iSocket.Models = {};
	iSocket.Views = {};

	/**
		User Model
	**/
	iSocket.Models.Login = Backbone.Model.extend({
		url: 'http://localhost/iSocket/login.php',
		validate: function(attrs){
			if(!attrs.username){
				return 'Please enter Username';
			}
			else if( ! attrs.password){
				return 'Please enter Password';
			}
		},
		login: function(username, password){
			return 'success'
		}
	});
	/**
		Login View
	**/
	iSocket.Views.Login = Backbone.View.extend({
		tagName: 'form',
		template: _.template("<fieldset>username: <input type='text' name='username'><br>"+
			"Password: <input type='password' name='password'>"+
			"<input type='submit' value='Login'>"),
		events: {
			'submit' : 'submit'
		},
		render: function(){
			this.$el.html(this.template());
			return this;
		},
		submit:function(event){
			event.preventDefault();
			//Get attributes
			var username = $(event.currentTarget).find('input[type=text]').val(),
				password = $(event.currentTarget).find('input[type=password]').val();
			//Send AJAX request to the server
			this.model.set({
				username: username,
				password: password
			});
			this.model.save().done(function(){
				console.log('show dog');
			}).fail(function(){
				console.log("ajax failed");
			});
		},
		error: function(model, error){
			alert("error");			
		}
	});

	var login = new iSocket.Models.Login;	//Instance of Login Model
	var loginView = new iSocket.Views.Login({model: login});
	$('#login-form').html(loginView.render().el);

})();