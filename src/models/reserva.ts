import { model, Schema } from 'mongoose';

export enum Status {
    EM_ANDAMENTO = 'A',
    FINALIZADA = 'F',
    CANCELADA = 'C'
}

const schema = new Schema({
    idCliente: { type: Schema.Types.ObjectId, ref: 'Clientes', required: true },
    idQuarto: { type: Schema.Types.ObjectId, ref: 'Quartos', required: true },
    dataCheckin: { type: Date, required: true },
    dataCheckout: { type: Date, required: true },
    custoTotal: { type: Number, required: true },
    dataReserva: { type: Date, required: true },
    status: { type: String, enum: Status }
})

export const Reservas = model('Reservas', schema);