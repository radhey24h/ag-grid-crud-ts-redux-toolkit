var jsonserver = require('json-server');
var server = jsonserver.create();
var router = jsonserver.router(require('./db.js')());
var middleware = jsonserver.defaults();

server.use(middleware);
server.use(router);
server.listen(8080, function () {
    console.log('JSON server is running on http://localhost:8080');
})