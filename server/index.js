const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).end();
});
app.get('/test', (req, res) => {
  res.send(['a', 'b', 'c']);
});

app.listen(3000, () => {
  console.log('listen');
});
