const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const { port } = require('./config/appConfig');
const lecturasRFIDRoutes = require('./routes/lecturasRFIDRoutes');
const { json } = require('express');
const app = express();

// Middleware
app.use(cors());
app.use(json());

// Conectar a MongoDB
connectDB();

// Rutas

app.use('/api', lecturasRFIDRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});