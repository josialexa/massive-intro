require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, DATABASE_STRING} = process.env
const ic = require('./controllers/inventoryController')

const app = express()
massive(DATABASE_STRING)
    .then(db => {
        app.set('db', db)
        console.log('Database connected')
    })
    .catch(err => console.log('Could not connect!'))

app.use(express.json())

// app.get('/api/inventory/:inventory_id?', ic.getInventory)
app.post('/api/inventory', ic.addInventory)

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`)
})