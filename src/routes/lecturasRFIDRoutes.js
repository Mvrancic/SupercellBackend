const express = require('express');
const router = express.Router();
const lecturasRFIDController = require('../controllers/lecturasRFIDController');

// Ruta para agregar una nueva tarjeta RFID
router.post('/agregar_tarjeta', lecturasRFIDController.agregarTarjeta);

module.exports = router;
