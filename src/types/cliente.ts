import { Types } from 'mongoose';

export type typeCliente = {
    _id: Types.ObjectId,
    nome: string,
    email: string,
    senha: string,
    fotoPerfil: string,
    refreshToken?: { idRefreshToken: string, expiresIn: number }
}