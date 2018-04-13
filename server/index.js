require('dotenv').config()
const express = require('express'),
      bodyParser = require('body-parser'),
      ctrl = require('./controller'),
      massive = require('massive')

      const app = express()
      const port = 4000

      app.use(bodyParser.json())

      app.get('/api/houses', ctrl.getHouses)
      app.post('/api/houses', ctrl.postHouse)
      app.delete('/api/houses/:id', ctrl.deleteHouse)

      massive(process.env.CONNECTION_STRING).then(dbInstance => {
        app.set('db', dbInstance)
        app.listen(port, () => console.log(`Server running on port: ${port}`))
      }).catch(console.error())

