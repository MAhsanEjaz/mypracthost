const express = require('express');

const mongoose = require('mongoose');
require('dotenv').config();


const app = express();

const UserModel = require('./model/datamodel');

app.use(express.json());



const MONGODB_URI = 'mongodb+srv://pidian:pidian12345@cluster0.59rl4po.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error.message);
  });


app.post('/post',async(req,res)=>{

    const data = UserModel({

        name: req.body.name,
        className: req.body.className

    });

    await data.save();
    res.json(data);


})

app.get('/getUser',async(req, res)=>{

    const data = await UserModel.find();

    res.json(data);

})



app.get('/use',(req, res)=>{

    res.json({message:"Hello baby"})


})


app.get('/data',(req, res)=>{

    res.send(data);

})


const data = [
    {
    'name':'Sufyan',
    'class': 'Nursurt'
},
{
    'name':'Sufyan',    
    'class': 'Nursurt'
},
{
    'name':'Sufyan',
    'class': 'Nursurt'
},
{
    'name':'Sufyan',
    'class': 'Nursurt'
},
{
    'name':'Sufyan',
    'class': 'Nursurt'
},
{
    'name':'Sufyan',
    'class': 'Nursurt'
},

]


const PORT = process.env.PORT || 3000;

app.listen(PORT);