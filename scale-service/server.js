var http = require('http')
var Authentic = require('authentic-service')

var auth = Authentic({
  server: 'http://scale-auth:1337'
});

var authorized = [ 'your@email.com' ]

http.createServer(function (req, res) {
    auth(req, res, function(err, authData) {
        if(err) {
            return console.error(err);
        }

        if (!authData) {
            return respond(res, 401, {error: 'Not authenticated.'})
        }

        if (authorized.indexOf(authData.email) >= 0) {
            return respond(res, 200, {
                success: true, message: authData.email + ' is on the list.'
            })
        } else {
            return respond(res, 403, {error: 'Not on the list.'})
        }
    });
}).listen(1338)

console.log('Protected microservice listening on port', 1338)

function respond (res, status, obj) {
  res.writeHead(status, {'content-type': 'application/json'})
  res.end(JSON.stringify(obj))
}
