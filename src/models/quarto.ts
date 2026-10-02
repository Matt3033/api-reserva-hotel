import { model, Schema } from 'mongoose';

const schema = new Schema({
    idHotel: { type: Schema.Types.ObjectId, ref: 'Hoteis', required: true },
    nome: { type: String, required: true },
    preco: { type: Number, required: true },
    descricao: { type: String, required: true },
    fotos: { type: [String], required: true },
    qtdeHospedes: { type: Number },
    ocupado: { type: Boolean }
})

export const Quartos = model('Quartos', schema);