const express = require('express');

const app = express();
app.use(express.static('public'));
app.use(express.json());

app.listen(8080, () => {
  console.log('listening on 8080');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    console.dir(req.body.num_stars);
});