import { Request, Response } from 'express';
import { ClienteService } from '../services/cliente.service';
import { ValidacaoCliente } from './validation-input/validacao-cliente';

export class ClienteControllers {

    constructor(
        private readonly clienteService: ClienteService,
    ) { }

    public async incluirCliente(req: Request, res: Response): Promise<Response> {
        try {

            const data = req.body;
            
            const validacaoCliente = new ValidacaoCliente(data);
            const errosInput = validacaoCliente.validar();
            if (errosInput.length > 0) {
                return res.status(422).send({ body: errosInput });
            }

            const resposta = await this.clienteService.incluirCliente(data);

            return res.status(201).send({ body: 'Usuário cadastrado', data: resposta });
        } catch (err: any) {
            return res.status(422).send({ body: err.message });
        }
    }
}