import { IncluirHotelDTO } from '../dtos/hotel.dto';
import { HotelRepositories } from '../repositories/hotel.repositories';
import { hashSenha } from '../utils/hash-senha';

export class HotelService {

    constructor(
        private readonly hotelRepo: HotelRepositories
    ) { }

    public async incluirHotel(data: IncluirHotelDTO) {
        const hotelExiste = await this.hotelRepo.buscarHotelPorAtributo({ email: data.email });
        if (hotelExiste) throw new Error('Este usuário já existe');

        const hash = await hashSenha(data.senha);
        data.senha = hash;

        const dataEnvio = {
            ...data,
            avalicaoMedia: 0,
            fotoPerfil: '',
            refreshToken: { idRefreshToken: '', expiresIn: 0 }
        }

        const resposta = await this.hotelRepo.incluirHotel(dataEnvio);
        return resposta; 
    }
}