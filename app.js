'use strict';
const fs = require('fs');
const http = require('http');


const hostname = '127.0.0.1';//server id adress
const port = 8000;//port

//Reading JSON information from try.json

//console.log(eventList[0].name);


//setting up the server host
const server = http.createServer((req, res) => {
    

  if(req.url =='/'){
      fs.readFile('index.html', function(err, data){
          if(err) throw err;
          fs.readFile('try.json', (err, data) => {
            if (err) throw err;
            let eventList = JSON.parse(data);
            res.writeHead(200, {'Content-Type': 'text/html'});
            for(var j = 0; j < eventList.length; j++){
              res.write('<h3>Event ' +eventList.indexOf(j++) +  '</h3><p> Event Name: </br>' +eventList[j].name+ '</p>'); 
              res.write('<p> Event Time/Date: </br>' +eventList[j].stime+ '</p>'); 
            }
             return res.end();
          });
          
          
      });
  }
  /*else if(req.url =='/about'){
      fs.readFile('about.html', function(err, data){
          if(err) throw err;
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          return res.end();
      });
  }*/
  
  

});

//starting the server
server.listen(port,hostname,()=>{
  console.log('Server runnit @ ' +hostname+ ':' + port);
});

