const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const PORT = 3001; // Frontend runs on port 3001

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Proxy API requests to the backend
app.use('/api', createProxyMiddleware({
  target: 'http://localhost:3000',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // Remove /api prefix when forwarding to backend
  },
}));

// Start the frontend server
app.listen(PORT, () => {
  console.log(`Frontend server is running on http://localhost:${PORT}`);
});