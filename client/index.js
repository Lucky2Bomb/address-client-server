const express = require('express');
const path = require('path');
const { CLIENT_PORT } = require('./src/config.json');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(CLIENT_PORT, () => {
  console.log("client server started at http://localhost:" + CLIENT_PORT);
});