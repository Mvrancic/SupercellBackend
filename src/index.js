import express, { json } from 'express';
import cors from 'cors';
import connectDB from './config/db';
import { port } from './config/appConfig';

const app = express();

// Middleware
app.use(cors());
app.use(json());

// Conectar a MongoDB
connectDB();

// Rutas
import lecturasRFIDRoutes from './routes/lecturasRFIDRoutes';
app.use('/api', lecturasRFIDRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});