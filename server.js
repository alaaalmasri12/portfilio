'use strict';

const express = require('express');
const app = express();


app.use(express.static('./public'));

app.get('/index', (request, response) => {
  response.send(__dirname+"html");
});

app.get('/html', (request, response) => {
  console.log("website is working fine")
 
});
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
  console.log("portflio has been deployed on port 3000")
})