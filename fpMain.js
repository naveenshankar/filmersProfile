var fp = function()
{	
	var models = new fpModels();
	var views = new fpViews();
	this.utils = new fpUtils();

	this.credentialsModel = new models.YTCredentialsModel();
	this.videosModel = new models.YTVideosModel();

	this.credentialsView = new views.YTCredentialsView({el:'#credentials',model:this.credentialsModel});
	this.videosView = new views.YTVideosView({el:'#videoslist',model:this.videosModel});
	
}();

