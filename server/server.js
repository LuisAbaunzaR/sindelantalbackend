const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const routes = require('./routes')


const app= express();



const port= process.env.PORT || 2028

const {errors}=require("celebrate");
const cors= require('cors')

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
app.use('/api/v1',routes)
app.use(errors())  //manda los errorres que se llegaran a generar en el celebrate (validations)


app.get('/',(req,res)=>{
    res.send("Everything Works")
});

app.listen(port,e =>console.log(`works in port ${port}`))