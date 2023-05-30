const express = require('express');
const app = express();
const port = process.env.PORT || 7000;

const meal = require('./data/meal.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/meal', (req, res) => {
    res.send(meal);
  })

app.listen(port, () => {
  console.log(`Chef api running ${port}`)
})