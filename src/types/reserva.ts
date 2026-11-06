import { Types } from 'mongoose';
import { Status } from '../models/reserva';

export type typeReserva = {
    _id: Types.ObjectId,
    idCliente: Types.ObjectId
    idQuarto: Types.ObjectId,
    dataCheckin: Date,
    dataCheckout: Date,
    custoTotal: number,
    dataReserva: Date,
    status: Status
}