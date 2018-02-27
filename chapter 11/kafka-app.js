const templateData = require('./index.html');
const kafka = require('kafka-node');
const kafkaClient = new kafka.Client();
const producer = new kafka.Producer(kafkaClient);

const storyJSON = require('./story.json');


kafkaClient.once('connect', function () {
    kafkaClient.loadMetadataForTopics([], function (error, results) {
      if (error) {
      	return console.error(error);
      }
      let listofTopics = Object.keys(results[1]['metadata']);
      if(listofTopics.indexOf('pinBoard')==-1){
		producer.createTopics(['pinBoard'], (err, data)=>{
			console.log("New 'pinBoard' Topic created", err, data);
			//sendMessage();      	
		});      	
      }else{
		//sendMessage()      	
      }
    });
});



function sendMessage(){
	let count = -1;
	setInterval(()=>{
		count = count==9 ? count = 0 : ++count;
		/**
	    * [messages multi messages can be an array,
	    * single message can be a string or 
	    * a JSON]
	    */
		producer.send([{
		   topic: 'pinBoard',
		   messages: JSON.stringify(storyJSON[count]),
		}], (err, data)=>{
			console.log("Message send by producer", err, data);
		})
	}, 1000)
	//120000
		
}
