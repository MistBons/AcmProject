const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

// mongoose.connect("mongoose://localhost:27017/userDB", {useNewUrlParser: true});

app.get('/' , (req,res)=>{
    res.render('index.html');
})

const port = 3000;
app.listen(port , ()=>{
    console.log(`server is listening at port ${port}`);
})