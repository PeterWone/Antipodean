const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Fallback to serve index.html for any unmatched routes
app.use((req, res, next) => {
  if (req.path === '/') {
    return res.sendFile(path.join(__dirname, 'index.html'));
  } else {
    next(); 
  }
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
