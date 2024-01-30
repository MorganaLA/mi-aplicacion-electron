const express = require('express');
const app = express();

// Definir tus rutas y middleware aquí

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error('Error en el servidor Express:', err);
  res.status(500).send('Error en el servidor Express');
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
