const express = require('express');
const router = express.Router();
const lecturasRFIDController = require('../controllers/lecturasRFIDController');

router.get('/ultimoId', lecturasRFIDController.getUltimoIdTarjeta);

module.exports = router;