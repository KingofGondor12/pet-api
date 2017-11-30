const express = require('express')
const app = express()

const pets = ['Kitten', 'Cat', 'Pupper', 'Doggo']

app.get('/api/pets', (req, res) => {
  res.send(pets)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
