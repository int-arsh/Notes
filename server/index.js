import express from 'express';

const app = express();
const port = 3000;

// Middleware for parsing JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 