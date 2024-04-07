const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./src/api/routes/posts');
const cors = require('cors'); // Importa cors
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Usa cors
app.use(cors()); // Esto habilitará CORS para todas las rutas y métodos

app.use(bodyParser.json());

// Rutas
app.use('/api/posts', postRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
