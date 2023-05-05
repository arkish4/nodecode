const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

const corsOptions = {
  origin: [
    'http://49.36.101.102:3003',
    'http://172.70.218.175:3003',
    'http://10.223.164.160:3003',
    'http://10.223.26.169:3003',
    'http://localhost:3003',
  ],
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
    sameSite: 'none',
    secure: true,
    // domain: 'http://localhost:3003',
    path: '/',
  });
  console.log(
    'Req Header -------------------------------------------------------------'
  );
  console.log(req.headers);
  console.log('cookie set');
  res.json('Cookie set!');
});

app.listen(3030, () => console.log('Server started on port 3030'));
