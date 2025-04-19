const express = require('express');
const path = require('path');
const fs = require('fs');
const marked = require('marked'); // Use the marked library to render Markdown

const app = express();
const PORT = 3000;

// Middleware to inject a custom header for local server
app.use((req, res, next) => {
  res.setHeader('X-Local-Server', 'true');
  next();
});

// Fallback to serve index.html for any unmatched routes or render Markdown files
app.use(async (req, res, next) => {
  if (req.path === '/') {
    return res.sendFile(path.join(__dirname, 'index.html'));
  } else if (req.path.endsWith('.md')) {
    const filePath = path.join(__dirname, req.path);
    try {
      if (fs.existsSync(filePath)) {
        const markdownContent = fs.readFileSync(filePath, 'utf-8');
        const htmlContent = marked.marked(markdownContent); // Render Markdown to HTML
        res.setHeader('Content-Type', 'text/html');
        res.setHeader('Content-Length', Buffer.byteLength(htmlContent));
        return res.send(`<div class="markdown-body"><h1>${req.path}</h1>${htmlContent}</div>`);
      } else {
        res.status(404).send('Markdown file not found');
      }
    } catch (error) {
      console.error('Error reading or rendering Markdown file:', error);
      res.status(500).send('Internal Server Error');
    }
  } else {
    next();
  }
});

// Endpoint to emulate GitHub API for TOC data
app.get('/api/toc', (req, res) => {
  const directoryPath = path.join(__dirname, "src");
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const markdownFiles = files
      .filter(file => file.endsWith('.md'))
      .map(file => ({ name: file }));

    res.json(markdownFiles);
  });
});

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Handle 404 for other routes
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Start the server
app.listen(3000, '0.0.0.0', () => {
  console.log('Server is running on port 3000');
});
