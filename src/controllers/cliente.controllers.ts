import { Request, Response } from 'express';
import { ClienteRepositories } from '../repositories/cliente.repositories';

export class ClienteControllers {
    
    constructor(
        private readonly clienteRepo: ClienteRepositories
    ){}

    public async incluirCliente(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body;
            
            const { nome, email, senha } = data;
            
            if (!nome || !email || !senha) {
                return res.status(422).send({ body: 'Preencha todos os campos' });
            }
            
            const resposta = await this.clienteRepo.incluirCliente(data);

            return res.status(201).send({ body: 'Usuário cadastrado', data: resposta });
        } catch (err: any) {
            return res.status(422).send({ body: err.message });
        }
    }
}