const express = require('express');
const app = express();
const port = process.env.PORT || 7000;

// const meal = require('./data/meal.json')
const meal = require('./data/chef.json')

app.get('/', (req, res) => {
  res.send('the Chef items watching here mood')
})

app.get('/chef', (req, res) => {
  res.send(meal);
})

app.listen(port, () => {
  console.log(`Chef api running ${port}`)
})