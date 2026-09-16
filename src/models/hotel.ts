import { model, Schema } from 'mongoose';

const schema = new Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    endereco: { type: String, required: true },
    avaliacaoMedia: { type: Number },
    fotoPerfil: { type: String },
    refreshToken: { type: { idRefreshToken: String, expiresIn: Number }, _id: false }
})

export const Hoteis = model('Hoteis', schema);