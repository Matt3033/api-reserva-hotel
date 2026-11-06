import { Types } from 'mongoose';

export class IncluirReservaDTO {
    idCliente!: Types.ObjectId;
    idQuarto!: Types.ObjectId;
    dataCheckin!: Date;
    dataCheckout!: Date;
    custoTotal!: number;
}