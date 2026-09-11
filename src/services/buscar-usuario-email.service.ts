import { ClienteRepositories } from '../repositories/cliente.repositories';
import { HotelRepositories } from '../repositories/hotel.repositories';

export class BuscarUsuarioPorEmailService {

    constructor(
        private readonly clienteRepo: ClienteRepositories, 
        private readonly hotelRepo: HotelRepositories
    ) {}
    
    public async buscar(email: string): Promise<{ nome: string, email: string, senha: string } | false> {
        const cliente = await this.clienteRepo.buscarPorAtributo({ email });
        const hotel = await this.hotelRepo.buscarPorAtributo({ email });

        if (cliente) return cliente;
        
        if (hotel) return hotel;

        return false;
    }
}