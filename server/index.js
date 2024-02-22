const express = require('express');
const fs = require('fs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).end();
});
app.get('/write', (req, res) => {
  const message = 'ok';

  fs.appendFile('upload/messages.txt', message.concat('\n'), (err) => {
    if (err) {
      return res.status(500).json({ error: 'Erreur lors de l\'écriture du fichier.' });
    }
    res.status(200).json({ message: 'Message écrit avec succès.' });

    return null;
  });
});

app.listen(port, () => {
  console.log(`app listen on port ${port}`);
  return null;
});
