import { Types } from 'mongoose';

export type typeHotel = {
    _id: Types.ObjectId,
    nome: string,
    email: string,
    senha: string,
    endereco: string,
    avalicaoMedia: number,
    fotoPerfil: string,
    refreshToken?: { idRefreshToken: string, expiresIn: number }
}