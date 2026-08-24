import { IncluirClienteDTO } from '../dtos/cliente.dto';
import { Clientes } from '../models/cliente';
import { typeCliente } from '../types/cliente';

export class ClienteRepositories {
    
    public async incluirCliente(data: typeCliente) {
        try {
            const cliente = new Clientes(data);
            const res = await cliente.save();
            
            return { nome: res.nome, email: res.email };

        } catch (err: any) {
            throw new Error(err.message);
        }
    }

    public async buscarClientePorAtributo(atributos: Partial<typeCliente>) {
        try {
            const cliente = await Clientes.findOne(atributos);
            
            if (!cliente) {
                return false;
            }
            return cliente;

        } catch (err: any) {
            throw new Error(err.message);
        }
    }
}