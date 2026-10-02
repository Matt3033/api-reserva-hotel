import { ObjectId } from 'mongoose';

export type typeHotel = {
    _id: ObjectId,
    nome: string,
    email: string,
    senha: string,
    endereco: string,
    avalicaoMedia: number,
    fotoPerfil: string,
    refreshToken?: { idRefreshToken: string, expiresIn: number }
}