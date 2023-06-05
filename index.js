const express = require('express');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 7000;

app.use(cors());

const chefs = require('./data/chef.json')

app.get('/', (req, res) => {
  res.json({message:"Chef items watching mood"})
})

app.get('/AllData', (req, res) => {
  res.send(chefs);
})

app.get("/AllData/:id", (req, res) => {
  const _id = req.params.id;
  const singleChefs = chefs.find((chef) => +chef.id === +_id);
  res.send(singleChefs);
});

app.listen(port, () => {
  console.log(`Chef api running ${port}`)
})