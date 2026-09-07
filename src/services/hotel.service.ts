import { IncluirHotelDTO } from '../dtos/hotel.dto';
import { HotelRepositories } from '../repositories/hotel.repositories';
import { hashSenha } from '../utils/hash-senha';
import { BuscarUsuarioPorEmailService } from './buscar-usuario-email.service';

export class HotelService {

    constructor(
        private readonly hotelRepo: HotelRepositories
    ) { }

    public async incluirHotel(data: IncluirHotelDTO) {

        const buscarUsuarioEmail = new BuscarUsuarioPorEmailService();
        const usuarioExiste = await buscarUsuarioEmail.buscar(data.email);

        if (usuarioExiste) throw new Error('Este usuário já existe');

        const hash = await hashSenha(data.senha);
        data.senha = hash;

        const dataEnvio = {
            ...data,
            avalicaoMedia: 0,
            fotoPerfil: '',
            refreshToken: { idRefreshToken: '', expiresIn: 0 }
        }

        const resposta = await this.hotelRepo.incluir(dataEnvio);
        return resposta;
    }
}