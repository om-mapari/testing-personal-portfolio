const express = require("express");
const app = express();
const path = require("path");

// Serve static files
app.use(express.static(path.join(__dirname)));

// Set up route for index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Try to start on port 3001, fallback to 3002 if needed
const PORT = 3001;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${PORT} is already in use, trying port 3002...`);
    const PORT2 = 3002;
    app.listen(PORT2, () => {
      console.log(`Server running on port ${PORT2}`);
    });
  } else {
    console.error('Server error:', err);
  }
}); 