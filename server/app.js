const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('서버로 보냄!');
});

app.listen(3000, () => {
  console.log('http://localhost:3000 으로 서버 연결 중...');
});
