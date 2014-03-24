
var port = process.env.PORT || 8000;
var express = require('express');
var app = express();

app.use(express.bodyParser());
app.set('port', port);

app.use(app.router);

// I added following line so you can better see what happens
app.use(express.logger('dev'));

app.post('/services/apexrest/MobileWS', function(req, res){
	
	//var header = req.toString();
	if (req.headers['authorization']!='Bearer <00DL000000287T3!AQwAQFPlbe5gX0476PzORHGXjTb6BmtpcmDIpnXM7Bj7KY6e6WW2zKa7n_dVzxHr.e1yxVuPhh9Fc8kSzYQYUUaN5RMwEHCi>')
	{
		res.json({"success":false,"ObjectName":"","ObjectID":"","error":"Authorization Failed : Token incorrect or expired."})
	}
	var action = req.body.Function;
	if (action=="SearchCompany")
	{
		res.json(
		{
  "page": 1,
  "pagesize": 50,
  "totalrecords": 2000,
  "results": [
    {
      "name": "Prototype Interactive",
      "logo": "http://linktologo.com",
      "website": "www.prototype.ae",
      "tel": "0455555",
      "email": "info@prototype.ae",
      "businesskeywords": [
        "keyword",
        "keyword"
      ],
      "businessprofile": "here goes the business profile",
      "industry": [
        "Finance",
        "Media"
      ],
      "activity": [
        "Media",
        "Production"
      ],
      "segment": [
        "Media Buying",
        "Media Film Production"
      ],
      "geolocation": "24.2323,55.23232(GPS OF CLOSEST OFFICE)",
      "distance": "1200m",
      "locations": [
        {
          "businesspark": "DMC",
          "building": "DMC1",
          "officenumber": "205",
          "geolocation": "24.2323,55.23232"
        }
      ]
    }
  ]
}
)
	}
});

app.listen(port);
console.log('Listening on port' + port);

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