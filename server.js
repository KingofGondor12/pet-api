const express = require('express')
const app = express()

const pets = ['Zazzles', 'Muffin Boots', 'Snugglelumps', 'Captain Pawesome']
const owners = ['John', 'Sally', 'Molly', 'Jenna', 'Charles', 'Oscar']

app.get('/api/pets', (req, res) => {
  res.send(pets)
})

app.get('/api/owners', (req, res) => {
  res.send(owners)
})

app.listen(3001, () => console.log('Example app listening on port 3001!'))
