const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const lecturaRFIDSchema = new Schema({
  tarjeta_id: {
    type: String,
    required: true
  },

  timestamp: {
    type: String,
    required: true
  }
});

const lecturasRFID = mongoose.model('LecturasRFID', lecturaRFIDSchema, 'lecturasRFID');

module.exports = lecturasRFID;