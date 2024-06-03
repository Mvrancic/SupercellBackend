const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const { port } = require('./config/appConfig');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
connectDB();

// Rutas
const lecturasRFIDRoutes = require('./routes/lecturasRFIDRoutes');
app.use('/api', lecturasRFIDRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});