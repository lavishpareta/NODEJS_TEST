const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/form', (req, res) => {
  fs.writeFileSync('form.json', JSON.stringify(req.body));  
  res.send('Form saved!');
});

app.get('/form', (req, res) => {
  const formData = fs.readFileSync('form.json', 'utf-8');
  res.send(formData);
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:3000`);
});
