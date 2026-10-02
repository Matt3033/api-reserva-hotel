import { ObjectId } from 'mongoose';

export type typeQuarto = {
    _id: ObjectId,
    idHotel: ObjectId;
    nome: string;
    preco: number;
    descricao: string;
    fotos: string[];
    qtdeHospedes: number;
    ocupado: boolean
}