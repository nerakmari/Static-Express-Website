require('dotenv').config();
const path = require('path');
const express = require('express');

//routes
const index = require('./routes/index');
const v0 = require('./routes/api/v0');

// to make it static 
const app = express()

app.use(express.static(path.join('./public')));

//setting view engine
app.set('view engine', 'ejs');


// index
app.use('/', index)

// api
app.use('/api/v0', v0)


// 404
app.use((req, res) => {
  res.status(404);
  res.send('404 Error Page Not Found')
})

//Listening on which port
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log (`Listening on port: ${PORT}`);
})