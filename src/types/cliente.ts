export type typeCliente = {
    nome: string,
    email: string,
    senha: string,
    fotoPerfil: string,
    refreshToken?: { idRefreshToken: string, expiresIn: number }
}