const express = require('express');
const app = express();
const port = 3000;

// Require routes
const routes = require('./src/routes/index');

// Middleware to parse JSON bodies
app.use(express.json());

// Use routes
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
