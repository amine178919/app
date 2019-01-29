const express = require('express');
//Init App
const app = express();
//Home Route
app.get('/',function(req,res){
  res.send('Hello World 2k19');
})
//Start Server
 app.listen(3000, function(){
   console.log('Server started on port 3000...............................');

   const https = require('https');

   https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
     let data = '';

     // A chunk of data has been recieved.
     resp.on('data', (chunk) => {
       data += chunk;
     });

     // The whole response has been received. Print out the result.
     resp.on('end', () => {
       console.log(JSON.parse(data).explanation);
     });

   }).on("error", (err) => {
     console.log("Error: " + err.message);
   });

 });
