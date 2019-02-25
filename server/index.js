const express = require('express');
const cors = require('cors');
const monk = require('monk');
const Filter = require('bad-words');
const rateLimit = require("express-rate-limit");


const app = express();

//const db = monk('mongodb+srv://newUser:123abc@clusterzargas-qdi0f.gcp.mongodb.net/test?retryWrites=true' || 'localhost/meower');  //talks with one or another
const db = monk('localhost/meower');  //talks with one or another

const mews = db.get('mews');
filter = new Filter();





app.use(cors()); 
app.use(express.json());

app.get('/',(req,res) =>{
    res.json({
        message:"Meowerrr!!!!!"
    });
});

app.get('/mews',(req,res) => {
    mews
        .find()
        .then(mews =>{
            res.json(mews);
        })
})


function isValidMew(mew){
    return mew.name && mew.name.toString().trim() !== '' &&
            mew.content && mew.content.toString().trim() !== ''
}

app.use(rateLimit({
    windowMs: 30 * 1000, //30 seconds
    max:1
}));

app.post('/mews',(req,res)=>{
    if(isValidMew(req.body)){
        //insert into db
        const mew = {
            name: filter.clean(req.body.name.toString()),
            content: filter.clean(req.body.content.toString()),
            created: new Date()
        };
        console.log(mew); //print
        mews
            .insert(mew)
            .then(createdMew =>{
                res.json(createdMew)
            })
    }else{
        res.status(422);
        res.json({
            message: 'Hey! Name and Content are required!'
        })
    }
    
})

app.listen(5000, () =>{
    console.log('Listening on http://localhost:5000')
});