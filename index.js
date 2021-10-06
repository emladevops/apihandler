const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
  console.log('GET request: ', req.query);

  res.send(`Hello ${req.query.name}`);
})

app.post('/', (req, res) => {
  console.log('POST request: ', req.body);

  res.send(`Hello ${req.body.name}`);
})

app.listen(port, () => {
  console.log('App start in port: ', port);
})