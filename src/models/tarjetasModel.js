
const mongoose = require('mongoose');
const { Schema } = mongoose;

const tarjetaSchema = new Schema({
  tarjeta_id: {
    type: String,
    required: true
  },
    tipo: {
      type: String,
      required: true
    },
});

const Tarjeta = mongoose.model('Tarjeta', tarjetaSchema, 'tarjetas');

module.exports = Tarjeta;