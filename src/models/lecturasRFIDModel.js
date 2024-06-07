const { Schema, model } = require('mongoose');

const lecturaRFIDSchema = new Schema({
  tarjeta_id: {
    type: String,
    required: true
  },

  timestamp: {
    type: Date,  // Define el campo timestamp como tipo Date
  }
});

const LecturasRFID = model('LecturasRFID', lecturaRFIDSchema);

module.exports = LecturasRFID;
