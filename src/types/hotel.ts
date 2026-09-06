export type typeHotel = {
    nome: string,
    email: string,
    senha: string,
    endereco: string,
    avalicaoMedia: number,
    fotoPerfil: string,
    refreshToken?: { idRefreshToken: string, expiresIn: number }
}