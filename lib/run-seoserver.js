var arguments = process.argv.splice(2);
var port = arguments[0] !== 'undefined' ? arguments[0] : 4000;
Seoserver = require('./seoserver');
var server = new Seoserver({defaultPort: parseInt(port)});
server.start();
