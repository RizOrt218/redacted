var express    = require( 'express' );
var bodyParser = require( 'body-parser' );
var server     = express();

var switchWords = '';

server.use( express.static( 'public' ));
server.use( bodyParser.json({ type: 'application/json' }) );

function zeSwitch (req, res, next) {
  var sen = (req.body.message).toLowerCase();
  console.log(sen);
  var splitSen = sen.split(' ');
  console.log(splitSen);

  var ohNoYouDint = {
    'selfie': 'self-portrait',
    'yummers': 'delicious',
    'outchea' : 'delicious',
    'bruh' : 'wow',
    'doge' : 'pug',
    'cilantro' : 'soap',
    'bae' : 'loved one',
    'swag' : 'style',
    'yolo' : 'carpe diem'
  };

  for( var key in ohNoYouDint ) {
    for( var i = 0; i < splitSen.length; i++ ) {
       if( key === splitSen[i] ){
         splitSen[i] = ohNoYouDint[key];
         console.log(splitSen);
         switchWords = splitSen.join(' ');
       }
    }
  }
  next();
}
server.use( zeSwitch );

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