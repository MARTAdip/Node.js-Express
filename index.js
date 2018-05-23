    require('dotenv').config()
    const express = require('express');
    const app = express()

    var fs = require('fs');
    var file = fs.readFileSync('./events.json');
    var obj = JSON.parse(file);

    
    //app.get('/', (req, res) => res.send('home'))
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html');
    })
    app.get('/api/events', (req, res) => {
        console.log(req.query.aqm)
        //res.send(obj.filter(o => o.aqm.r3000["$numberInt"] > 70))
        res.send(obj)
    })
    app.get('/api/events/random', (req, res) => {
        console.log("route /api/events/random")
        res.send(obj[Math.floor(Math.random() * (obj.length - 0 +1)) +0])
    })
    app.get('/api/events/:id', (req, res) => {
        console.log(req.params) 
        res.send(obj.filter( item => item._id["$oid"] == req.params.id))
    })
    app.get('*', (req, res) => {
        console.log("route/ fallback")
        res.send("route not found") //  handling route that does not exist
    })

    app.listen(process.env.PORT, () => console.log('App listening on port 5000'))


    //req.params contains matched route parameters only.

