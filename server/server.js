const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const productsRouter = require('../server/routers/product.routes')


const app = express();

// Definir tus rutas y middleware aquí
app.use(cors())

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error('Error en el servidor Express:', err);
  res.status(500).send('Error en el servidor Express');
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/products', productsRouter)

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
