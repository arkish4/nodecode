const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3003',
  credentials: true,
  exposedHeaders: ['Set-Cookie'],
};

app.use(cors(corsOptions));

app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('<div>Hello from NodeCode!</div>');
});

app.post('/get-cookie', (req, res) => {
  res.cookie('mycookie', 'cookie value', {
    maxAge: 86400000,
    httpOnly: true,
    // sameSite: 'none',
    // domain: 'http://localhost:3003',
    path: '/',
  });
  res.json('Cookie set!');
});

app.listen(3030, () => console.log('Server started on port 3030'));
