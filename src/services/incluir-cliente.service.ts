import { IncluirClienteDTO } from '../dtos/cliente.dto';
import { ClienteRepositories } from '../repositories/cliente.repositories';
import bcrypt from 'bcrypt';

export class IncluirClienteService {
    
    constructor(
        private readonly clienteRepo: ClienteRepositories 
    ) {}

    public async incluirCliente(data: IncluirClienteDTO) {
        
        const clienteExiste = await this.clienteRepo.buscarClientePorAtributo({ email: data.email });
        if (clienteExiste) {
            throw new Error('Este usuário já existe');
        }
        
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(data.senha, salt);
        data.senha = hash;

        const dataEnvio = {
            ...data,
            fotoPerfil: '',
            refreshToken: { idRefreshToken: '', expiresIn: 0 }
        }

        const cliente = await this.clienteRepo.incluirCliente(dataEnvio);

        return cliente;
    }

}