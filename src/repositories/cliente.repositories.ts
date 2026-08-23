import { Clientes } from '../models/cliente';
import { typeCliente } from '../types/cliente';

export class ClienteRepositories {
    
    public async incluirCliente(data: typeCliente) {
        try {
            const cliente = new Clientes(data);
            const res = await cliente.save();
            
            return res;

        } catch (err: any) {
            throw new Error(err.message);
        }
    }
}