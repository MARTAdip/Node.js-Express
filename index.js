   const express = require('express');
   const app = express()
   //const dotenv = require('dotenv')
   require('dotenv').config()
   

   app.get('/', (req, res) => res.send('home'))
   app.get('/:id', (req, res) => {
       res.send('id route Marta')
   })
   app.listen(process.env.PORT, () => console.log('App listening on port 5000'))

   console.log('heeelelelelellel')