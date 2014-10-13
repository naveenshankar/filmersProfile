var fpViews = function()
{
	this.YTVideosView = Backbone.View.extend(
            {
                initialize : function()
                {
                    
                } 
            });

	this.YTCredentialsView = Backbone.View.extend(
            {
                initialize : function()
                {
                    var thisModel = this.model;
                    var thisId = this.el.id;
                },
                events: 
                {
                    "click #pullVideos" : "onClick",
                    "blur" :"onBlur",
                    "keyup" : "onKeyUp"
                },
                onClick: function()
                {
                 	var utils = new fpUtils();
                    var apiKey = 'AIzaSyB01qMKPma7RpTk-e-V893ioTRvjTIwLiU';
                  	var thisModel = this.model;
					$.ajax({
					  url: "dbConnect",
					}).done(function(user) {
					    utils.gapiConfig.apiKey = user['apiKey'];
					    utils.gapiConfig.clientId = user['clientId'];
					    if(utils.gapiConfig.apiKey && utils.gapiConfig.clientId){
					    	var videos = utils.getMyVideos(thisModel);
					    	var profileName = utils.getGoogleProfileName(thisModel); 
					    }
					    
					});
                  	
                },
                onBlur: function()
                {

                },
                onKeyUp: function()
                {

                }
            });

}
