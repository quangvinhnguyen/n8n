// server.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
  target: 'http://146.235.19.106:5678', // địa chỉ n8n thật (có thể là IP:port)
  changeOrigin: true,
  ws: true
}));

app.listen(3000, () => {
  console.log('HTTPS Proxy running on Render at port 3000');
});
