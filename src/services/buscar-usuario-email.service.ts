import { ClienteRepositories } from '../repositories/cliente.repositories';
import { HotelRepositories } from '../repositories/hotel.repositories';

export class BuscarUsuarioPorEmailService {

    public async buscar(email: string) {
        const clienteRepo = new ClienteRepositories();
        const hotelRepo = new HotelRepositories();
    
        const cliente = await clienteRepo.buscarPorAtributo({ email });
        const hotel = await hotelRepo.buscarPorAtributo({ email });

        if (cliente) return cliente;
        
        if (hotel) return hotel;

        return false;
    }
}