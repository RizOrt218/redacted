var express    = require( 'express' );
var bodyParser = require( 'body-parser' );
var server     = express();
var switchWords = '';

server.use( express.static( 'public' ));
server.use( bodyParser.json({ type: 'application/json' }) );

server.use( '/message', function (req, res, next) {
  //switch words
  switchWords = req.body.message
    .replace( 'selfie', 'self-portrait' )
    .replace( 'yummers', 'delicious')
    .replace( '', '')
    .replace( '', '')
    .replace( '', '')
    .replace( '', '');

  next();
});

server.get('/', function (req, res) {
  res.render( './index.html' );
});

server.post( '/message', function (req, res) {

  var sendMsg = {
    'success' : true,
    'message' : switchWords
  };
  res.send( sendMsg );
});

var server = server.listen( 2222, function ( ) {
  var host = 'localhost';
  var port = 2222;

  console.log( 'Example server listening at http://%s:%s', host, port );
});