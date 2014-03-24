var port = process.env.PORT || 8000;
var Interfake = require('interfake');
var interfake = new Interfake();
interfake.get('/whats-next').body({ next : 'more stuff '});
interfake.listen(port); // 