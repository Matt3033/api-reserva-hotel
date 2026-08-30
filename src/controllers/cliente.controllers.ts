import { Request, Response } from 'express';
import { ClienteRepositories } from '../repositories/cliente.repositories';
import { ClienteService } from '../services/cliente.service';
// dto para retorno apenas e colocar todos os dados a serem enviados no controller
export class ClienteControllers {
    
    constructor(
        private readonly clienteService: ClienteService,
        private readonly clienteRepo: ClienteRepositories
    ){}

    public async incluirCliente(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body;
            
            const { nome, email, senha } = data;
            
            if (!nome || !email || !senha) {
                return res.status(422).send({ body: 'Preencha todos os campos' });
            }
            
            const resposta = await this.clienteService.incluirCliente(data);

            return res.status(201).send({ body: 'Usuário cadastrado', data: resposta });
        } catch (err: any) {
            return res.status(422).send({ body: err.message });
        }
    }
}