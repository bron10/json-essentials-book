const templateData = require('./index.html');
const server = require('http').createServer((req, res)=>{
	res.setHeader('content-type', 'text/html');
	res.end(templateData);
});
const io = require('socket.io')(server);

let pinBoard = [];
io.on('connection', (client)=>{
	console.log("connected to realtime data server");
	client.on('disconnect', ()=>{
		console.log("A user is disconnected!");
	})
	client.on('new-pin', (pinData)=>{
		pinBoard.push(pinData);
		io.emit('append-to-list', pinData)
	})
});
server.listen(3400);

// http.createServer((req, res) => {

// 	if(req.url == '/html'){
// 		res.setHeader('content-type', 'text/html');
// 		const templateData = handlebar.compile(template)({
// 			"audience" : "Readers",
// 			"adjective": "simple"
// 		})
// 		res.end(templateData);
// 	}else
//     	res.end(`Hello ${constants.audience}`);
// }).listen(port);