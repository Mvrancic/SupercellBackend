const mongoose = require('mongoose');

const lecturasRFIDSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  tarjeta_id: { type: String, required: true },
  tipo: { type: String, required: true },
  acceso: { type: String, required: true },
  lector_id: { type: String, required: true },
  timestamp: { type: Date, required: true },
  // Otros campos si existen
});

module.exports = mongoose.model('LecturasRFID', lecturasRFIDSchema, 'lecturasRFID');