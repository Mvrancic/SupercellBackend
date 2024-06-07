const { Router } = require('express');
const router = Router();
const { getUltimoIdTarjeta } = require('../controllers/lecturasRFIDController');

router.get('/ultimoId', getUltimoIdTarjeta);

module.exports = router;