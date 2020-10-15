const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/', (req,res)=>{
    console.log('got post');
    const userInput = req.body;
    res.json({html : "<p>hello world</p>"});
});

app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})