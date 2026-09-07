export interface IUsuarioRepository<T> {
    incluir(data: T): Promise<{ nome: string, email: string }>,
    buscarPorAtributo(data: Partial<T>): Promise<{ nome: string, email: string, senha: string } | false>,
}