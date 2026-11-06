import { Types } from 'mongoose';
import { Reservas } from '../models/reserva';
import { typeReserva } from '../types/reserva';

export type typeRetornoSimples = { 
    idCliente: Types.ObjectId,
    idQuarto: Types.ObjectId,
    dataCheckin: Date,
    custoTotal: number
}

export class ReservaRepositories {

    public async incluir(data: Omit<typeReserva, '_id'>): Promise<typeRetornoSimples | false> {
        try {
            const reserva = new Reservas(data);
            const res = await reserva.save();

            return { 
                idCliente: res.idCliente, 
                idQuarto: res.idQuarto,
                dataCheckin: res.dataCheckin,
                custoTotal: res.custoTotal
            };
        } catch (err: any) {
            throw new Error(err.message);
        }
    }

}