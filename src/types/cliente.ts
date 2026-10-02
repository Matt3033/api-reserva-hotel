import { ObjectId } from 'mongoose';

export type typeCliente = {
    _id: ObjectId,
    nome: string,
    email: string,
    senha: string,
    fotoPerfil: string,
    refreshToken?: { idRefreshToken: string, expiresIn: number }
}