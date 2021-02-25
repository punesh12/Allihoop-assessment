const { default: axios } = require('axios')
const redis = require('redis')
const bodyParser = require('body-parser');
const express = require('express')
const { promisify } = require('util')

const app = express()
const port = 4000

app.use(bodyParser.json());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  const client = redis.createClient({
    host:'127.0.0.1',
    port:'6379',
})



  
const GET_ASYNC = promisify(client.get).bind(client)
const SET_ASYNC = promisify(client.set).bind(client)


// get capsules from api
app.get('/capsules', async (req,res,next) =>{
    try {

        const reply  = await GET_ASYNC('capsules')
        if(reply){
            // console.log('using cached data');
            res.send(JSON.parse(reply))
            return
        }


        const response = await axios.get('https://api.spacexdata.com/v3/capsules')
        const saveResult = await SET_ASYNC('capsules', JSON.stringify(response.data),'EX',5)
        // console.log('new data cached', saveResult)
        res.send(response.data)
        
    } catch (error) {
        res.send(error.message)
        
    }
})


// get ships from api

app.get('/ships', async (req,res,next) =>{
    try {

        const reply  = await GET_ASYNC('ships')
        if(reply){
            // console.log('using cached data');
            res.send(JSON.parse(reply))
            return
        }


        const response = await axios.get('https://api.spacexdata.com/v3/ships')
        const saveResult = await SET_ASYNC('ships', JSON.stringify(response.data),'EX',5)
        // console.log('new data cached', saveResult)
        res.send(response.data)
        
    } catch (error) {
        res.send(error.message)
        
    }
})


// get rockets from api

app.get('/rockets', async (req,res,next) =>{
    try {

        const reply  = await GET_ASYNC('rockets')
        if(reply){
            // console.log('using cached data');
            res.send(JSON.parse(reply))
            return
        }


        const response = await axios.get('https://api.spacexdata.com/v3/rockets')
        const saveResult = await SET_ASYNC('rockets', JSON.stringify(response.data),'EX',5)
        // console.log('new data cached', saveResult)
        res.send(response.data)
        
    } catch (error) {
        res.send(error.message)
        
    }
})


// get launchpad from api

app.get('/landpads', async (req,res,next) =>{
    try {

        const reply  = await GET_ASYNC('landpads')
        if(reply){
            // console.log('using cached data');
            res.send(JSON.parse(reply))
            return
        }


        const response = await axios.get('https://api.spacexdata.com/v3/landpads')
        const saveResult = await SET_ASYNC('landpads', JSON.stringify(response.data),'EX',5)
        // console.log('new data cached', saveResult)
        res.send(response.data)
        
    } catch (error) {
        res.send(error.message)
        
    }
})



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port 4000!`))