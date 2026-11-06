import { Types } from 'mongoose';

export type typeQuarto = {
    _id: Types.ObjectId;
    idHotel: Types.ObjectId;
    nome: string;
    preco: number;
    descricao: string;
    fotos: string[];
    qtdeHospedes: number;
    ocupado: boolean
}