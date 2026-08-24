import { IncluirClienteDTO } from '../dtos/cliente.dto';
import { Clientes } from '../models/cliente';

export class ClienteRepositories {
    
    public async incluirCliente(data: IncluirClienteDTO) {
        try {
            const cliente = new Clientes(data);
            const res = await cliente.save();
            
            return { nome: res.nome, email: res.email };

        } catch (err: any) {
            throw new Error(err.message);
        }
    }
}