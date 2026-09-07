import { Clientes } from '../models/cliente';
import { typeCliente } from '../types/cliente';
import { IUsuarioRepository } from './interfaces/usuario-repository';

export class ClienteRepositories implements IUsuarioRepository<typeCliente> {
    
    public async incluir(data: typeCliente): Promise<{ nome: string, email: string }> {
        try {
            const cliente = new Clientes(data);
            const res = await cliente.save();
            
            return { nome: res.nome, email: res.email };

        } catch (err: any) {
            throw new Error(err.message);
        }
    }

    public async buscarPorAtributo(atributos: Partial<typeCliente>): Promise<{ nome: string, email: string, senha: string } | false> {
        try {
            const cliente = await Clientes.findOne(atributos);
            
            if (!cliente) {
                return false;
            }

            return { 
                nome: cliente.nome, 
                email: cliente.email, 
                senha: cliente.senha 
            };

        } catch (err: any) {
            throw new Error(err.message);
        }
    }
}