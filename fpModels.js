var fpModels = function(){
	this.YTCredentialsModel = Backbone.Model.extend(
		    {
		        defaults : {
		        			"userName":"Enter your username",
		        			"password":'Enter your password',
		        			"credentialStatus":false,
		        			"videosApiKey":'AIzaSyB01qMKPma7RpTk-e-V893ioTRvjTIwLiU'
		        			}

		    });

	this.YTVideosModel = Backbone.Model.extend(
		    {



		    });
}
