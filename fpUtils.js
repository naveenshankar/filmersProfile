var fpUtils = function(){
	

}

fpUtils.prototype.gapiConfig = 
    {
      gapi : gapi,
      apiKey : '',
      YT:YT,
      clientId : ''
    }


fpUtils.prototype.getMyVideos = function()
	{
		var utils = this;
    	var response;
		var config = {
            'client_id': utils.gapiConfig.clientId,
            'scope': 'https://www.googleapis.com/auth/youtube',
            'immediate': true
        };

    	var makeRequest = function (playlistId)
          {
           //var request = gapi.client.urlshortener.url.get({'shortUrl': 'http://goo.gl/fbsS'});
            //var request = gapi.client.plus.people.get({'userId': 'me'});  
            //var request =  gapi.client.youtube.guideCategories.list({'part':'snippet','regionCode': 'IN'}); 
           //var request =  gapi.client.youtube.videos.list({'part':'snippet','id': '308KpFZ4cT8'}); 
           //var request =  gapi.client.youtube.channels.list({'part':'snippet', 'id' : 'UCKP9JMgqN4zLL_YNBdY5Twg'}); 
           //var request =  gapi.client.youtube.search.list({'part':'snippet','type': 'video', 'channelId' : "UCKP9JMgqN4zLL_YNBdY5Twg"}); 
           //var request = utils.gapiConfig.gapi.client.youtube.videos.list({mine: true,'part':'snippet','type': 'video', 'id' : "UC_I1A74oQXbEVuSaFdjCnzQ"});
           //UU_I1A74oQXbEVuSaFdjCnzQ
           var request =  utils.gapiConfig.gapi.client.youtube.search.list({'part':'snippet','type': 'video', 'channelId' : playlistId}); 
            request.execute(function(resp) 
            {
              //console.log(resp);
              var videos = resp.items;
              $.each(videos,function(index,item){
              			var divNo = index+1;
              			var divNoNext = index+2;
              			videoDivId = 'myVideoNo' + divNo;
              			//var videoContainer = $('#videoDivId');
              			//if(!videoContainer){
              			//	$('#videos').append('<div id="myVideoNo'+divNo+'" class="myVideoFrame"></div>');
              			//}
              			utils.renderNewVideo(videoDivId,item.id.videoId);
              			$('#videos').append('<div id="myVideoNo'+divNoNext+'" class="myVideoFrame"></div>');	

              });

            });

          };

        var makeYouTubeRequest = function()
        {
          		var request = utils.gapiConfig.gapi.client.youtube.channels.list({mine: true,part: 'contentDetails'});
          		//var request = utils.gapiConfig.gapi.client.youtube.videos.list({mine: true,part: 'contentDetails',id:'MEP4bc9NivE'});
  				request.execute(function(response) {
  				//console.log(response);
    			playlistId = response.result.items[0].contentDetails.relatedPlaylists.watchLater;
    			makeRequest(playlistId);
  				});

        };

         utils.gapiConfig.gapi.client.setApiKey(utils.gapiConfig.apiKey);
         utils.gapiConfig.gapi.auth.authorize(config, function(authResult) 
            {
              utils.gapiConfig.gapi.client.load('youtube', 'v3', makeYouTubeRequest);
          	});              
         
    }

fpUtils.prototype.getVideosByRegion = function()
	{

      
    }

fpUtils.prototype.getVideosByCategory = function()
	{

      
    }

fpUtils.prototype.getGoogleProfileName = function(model) 
    {
    	var utils = this;
    	var response;
    	var clientId = utils.gapiConfig.clientId;
		var apiKey = utils.gapiConfig.apiKey;
		var config = {
            'client_id': utils.gapiConfig.clientId,
            'scope': 'https://www.googleapis.com/auth/plus.me',
            'immediate': true
          };
        var makeGooglePlusRequest = function ()
          {                      
            var request = utils.gapiConfig.gapi.client.plus.people.get({'userId': 'me'});  
            request.execute(function(googlePlusResponse) 
            {
              model.set('userName',googlePlusResponse.displayName);
            });
            
          };
          utils.gapiConfig.gapi.client.setApiKey(utils.gapiConfig.apiKey);
          utils.gapiConfig.gapi.auth.authorize(config, function(authResult) 
            {
              utils.gapiConfig.gapi.client.load('plus', 'v1', makeGooglePlusRequest);
          	});
    }

fpUtils.prototype.renderNewVideo = function(renderDomId,renderYTVideoId){
        player = new utils.gapiConfig.YT.Player(renderDomId, {
                                height: '240px',
                                width: '320px',
                                videoId: renderYTVideoId,//'MEP4bc9NivE'
                                playerVars: { 'autoplay': 0, 'rel':0, 'autohide':1,  'theme': 'light' , origin: '',controls :1},
                                events: {
                                  'onReady': onPlayerReady,
                                  'onStateChange': onPlayerStateChange
                                }
                              });

        var onPlayerReady = function (event) {
        event.target.playVideo();
      }

      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 15000);
          done = true;
        }
      }
      function stopVideo() {
        //player.stopVideo();
      }

}
