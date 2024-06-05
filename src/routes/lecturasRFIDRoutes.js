const express = require('express');
const router = express.Router();
const lecturasRFIDController = require('../controllers/lecturasRFIDController');

// Ruta para agregar una nueva tarjeta RFID
router.post('/api/agregar_tarjeta', lecturasRFIDController.agregarTarjeta);

// Ruta para obtener el último ID de tarjeta RFID registrado
router.get('/api/ultimo_id_tarjeta', lecturasRFIDController.getUltimoIdTarjeta);

module.exports = router;
