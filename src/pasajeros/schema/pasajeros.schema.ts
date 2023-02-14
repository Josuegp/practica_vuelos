import * as mongoose from 'mongoose';

export const PasajeroSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  asiento: { type: String, required: true },
  vuelo: { type: String, required: true },
  horario: { type: String, required: true },
}, {timestamps:true}
);

PasajeroSchema.index({asiento:1},{unique:true})
PasajeroSchema.index({vuelo:1},{unique:true})