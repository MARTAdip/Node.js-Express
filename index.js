    const express = require('express');
    const app = express()
   
    require('dotenv').config()

    var fs = require('fs');
    var file = fs.readFileSync('./events.json');
    
    var obj = JSON.parse(file);
    
    app.get('/:id', (req, res) => {
        console.log(req.params) 

        res.send(obj.filter( item => item._id["$oid"] == req.params.id))
    })
    
    
    //app.get('/', (req, res) => res.send('home'))
    app.get('/', (req, res) => {
        console.log(req.query.aqm)
        res.send(obj.filter(o => o.aqm.r3000["$numberInt"] > 70))
    })
    
    app.listen(process.env.PORT, () => console.log('App listening on port 5000'))


    //req.params contains matched route parameters only.
