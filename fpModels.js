var fpModels = function(){
	this.YTCredentialsModel = Backbone.Model.extend(
		    {
		        defaults : {
		        			"userName":"Enter your username",
		        			"password":'Enter your password',
		        			"credentialStatus":false,
		        			"videosApiKey":''
		        			}

		    });

	this.YTVideosModel = Backbone.Model.extend(
		    {



		    });
}
