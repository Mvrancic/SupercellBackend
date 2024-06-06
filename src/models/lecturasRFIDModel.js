import { Schema, model } from 'mongoose';

const lecturaRFIDSchema = new Schema({
  tarjeta_id: {
    type: String,
    required: true
  },
  tipo: {
    type: String
  },
  acceso: {
    type: String
  },
  lector_id: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,  // Define el campo timestamp como tipo Date
    default: Date.now  // Establece el valor por defecto como la fecha y hora actual
  }
});

const LecturasRFID = model('LecturasRFID', lecturaRFIDSchema);

export default LecturasRFID;
