import { Router } from 'express';
const router = Router();
import { getUltimoIdTarjeta } from '../controllers/lecturasRFIDController';

router.get('/ultimoId', getUltimoIdTarjeta);

export default router;