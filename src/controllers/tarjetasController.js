// lecturasRFIDController.js
const Tarjeta = require('../models/tarjetasModel');

exports.agregarTarjeta = async (req, res) => {
  try {
    const nuevaTarjeta = new Tarjeta(req.body);
    await nuevaTarjeta.save();
    res.status(201).json({ message: 'Tarjeta agregada exitosamente' });
  } catch (err) {
    console.error('Error al agregar tarjeta:', err);
    res.status(500).json({ message: 'Error al agregar tarjeta' });
  }
};