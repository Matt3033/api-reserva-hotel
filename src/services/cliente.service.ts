import { IncluirClienteDTO } from '../dtos/cliente.dto';
import { ClienteRepositories } from '../repositories/cliente.repositories';
import { HotelRepositories } from '../repositories/hotel.repositories';
import { hashSenha } from '../utils/hash-senha';
import { BuscarUsuarioPorEmailService } from './buscar-usuario-email.service';

export class ClienteService {
    
    constructor(
        private readonly clienteRepo: ClienteRepositories,
        private readonly hotelRepo: HotelRepositories
    ) { }

    public async incluirCliente(data: IncluirClienteDTO): Promise<{ nome: string, email: string }> {

        const buscarUsuarioEmail = new BuscarUsuarioPorEmailService(
            this.clienteRepo, 
            this.hotelRepo
        );
        const usuarioExiste = await buscarUsuarioEmail.buscar(data.email);

        if (usuarioExiste) throw new Error('Este usuário já existe');

        const hash = await hashSenha(data.senha);
        data.senha = hash;

        const dataEnvio = {
            ...data,
            fotoPerfil: '',
            refreshToken: { idRefreshToken: '', expiresIn: 0 }
        }

        const cliente = await this.clienteRepo.incluir(dataEnvio);
        return cliente;
    }

}