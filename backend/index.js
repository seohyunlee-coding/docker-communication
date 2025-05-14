const express = require('express');
const app = express();
const cors = require('cors');

// 미들웨어 설정
app.use(express.json());
app.use(cors());

app.post('/api/data', (req, res) => {
  const data = req.body.data;
  console.log('Received data:', data);
  res.json({ message: `backend\'s message: the server received your data, "${data}" successfully` });
});


app.get('/api/message', (req, res) => {
  res.send('backend\'s message: Hello! Nice to meet you!');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});