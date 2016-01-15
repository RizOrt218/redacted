var express    = require( 'express' );
var bodyParser = require( 'body-parser' );
var server     = express();

server.use( express.static( 'public' ));
server.use( bodyParser.json({ type: 'application/json' }) );

