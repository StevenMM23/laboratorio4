const mongoose = require("mongoose");

const solicitudSchema = new mongoose.Schema({
  tipoDocumento: { type: String, required: true },
  documento: { type: String, required: true },
  nombres: { type: String, required: true },
  apellidos: { type: String, required: true },
  fechaNacimiento: { type: Date },
  vehiculoPropio: { type: Boolean, required: true },
  casaPropia: { type: Boolean, required: true },
  telefono: { type: String },
  referencia: { type: String },
  empleador: { type: String },
  monto: { type: Number, required: true },
  plazo: { type: Number, required: true },
});

const Solicitud = mongoose.model("Solicitud", solicitudSchema);

module.exports = Solicitud;
