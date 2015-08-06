var http = require('http');

var messages = ['That was not very nice.', 'Thanks for the compliment!', 'Sorry, I cannot take requests at this time.', 'I can do that for you.', 'Well, as the wise man once said...'];

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

var onRequest = function(req, res) {
	shuffleArray(messages);
	myMessage = messages[0];
	if (req.method === 'GET') {
		res.writeHead(200, {
		  'Connection': 'close',
		  'Content-Type': 'application/json',
		  'Access-Control-Allow-Origin': '*',
		});
		res.end(JSON.stringify({message: myMessage}));
	}
	else if (req.method === 'OPTIONS') {
		res.writeHead(200, {
		  'Connection': 'close',
		  'Content-Type': 'application/json',
		  'Access-Control-Allow-Origin': '*',
		  'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
		  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
		});
	res.end();
	}
};

http.createServer(onRequest).listen(8887);
console.log('listening on port 8887');