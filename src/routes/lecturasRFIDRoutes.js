const { Router } = require('express');
const router = Router();
const { getUltimoIdTarjeta, agregarTarjeta } = require( '../controllers/lecturasRFIDController');

router.get('/ultimoId', getUltimoIdTarjeta);
router.post('/agregar_tarjeta', agregarTarjeta)
module.exports = router;