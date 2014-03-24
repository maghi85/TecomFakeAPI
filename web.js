var Interfake = require('interfake');
var interfake = new Interfake();
interfake.get('/whats-next').body({ next : 'more stuff '});
interfake.listen(3000); // The server will listen on port 3000