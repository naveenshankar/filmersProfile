


// Requires
var express = require('express');

// Configuration
var appConfig = {
    staticPath:  __dirname // __dirname+'/static'
};

// Application
var app = express();

// Middlewares
app.use(express.static(appConfig.staticPath));
/*app.use(function(req,res,next){
    res.send(404, '404 Not Found. Sorry.\n');
});*/

app.get('/dbConnect', function(req, res){
  	  var dbUrl = 'localhost/googleData';
      var collections = ['userData'];
      var db = require('mongojs').connect(dbUrl,collections);
      db.userData.find({googleApi:true},function(err,data)
      {
      	var body;
      	if( err || !data)
      	{
      		res.send("No google data found");
      	} 
  		else data.forEach( function(record) 
  		{
    		res.send(record); 
  		});
      });
});

// Server
var server = app.listen(8000);

