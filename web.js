
var port = process.env.PORT || 8000;
var express = require('express');
 
var app = express();

app.use(express.json());
app.use(express.urlencoded());

app.post('/directory', function(req, res){
	var action = req.body.action;
	if (action=="search")
	{
		var lng = req.body.lng;
		var lat = req.body.lat;
		console.log(action + lng + lat);
	}
});

app.list(port);


/*var port = process.env.PORT || 8000;
var Interfake = require('interfake');
var interfake = new Interfake();
interfake.createRoute({
	request: {
		url: '/directory/search?lng=25.096276&lat=55.159416&segment_id=1&activity_id=3&businesspark_id=6&keyword=proto&sorting=distance',
		method: 'get'
	},
	response: 
});
interfake.post('/whats-next').body({ next : 'more stuff '});
interfake.listen(port); // */