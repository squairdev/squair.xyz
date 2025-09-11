const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const port = 80;

app.use(express.static(path.join(__dirname)));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/{*any}",(req,res)=>{
  res.sendFile(path.join(__dirname, '/404/index.html'));
})

app.listen(port, () => {
  console.log(`Server running on 80`);
});

app.get('/gifs/:filename', (req, res) => {
  const file = req.params.filename;
  const filePath = path.join(__dirname, 'gifs', file);
  if (!file.toLowerCase().endsWith('.gif')) return res.status(403).send('Forbidden');
  if (!fs.existsSync(filePath)) return res.status(404).send('Not found');

  res.set('Content-Type', 'image/gif');
  res.sendFile(filePath);
});