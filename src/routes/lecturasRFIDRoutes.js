const express = require('express');
const router = express.Router();
const lecturasRFIDController = require('../controllers/lecturasRFIDController');

// Define la ruta y asocia el controlador para obtener todas las lecturas RFID
router.get('/', lecturasRFIDController.getAllLecturas);

module.exports = router;