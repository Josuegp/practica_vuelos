import * as mongoose from 'mongoose';

export const VuelosSchema = new mongoose.Schema({
  vuelo: { type: String, required: true },
  horario: { type: TimeRanges, required: true },
  fecha: { type: Date, required: true },
  destino: { type: String, required: true },
}, {timestamps:true}
);

VuelosSchema.index({vuelo:1},{unique:true})
VuelosSchema.index({fecha:1},{unique:true})