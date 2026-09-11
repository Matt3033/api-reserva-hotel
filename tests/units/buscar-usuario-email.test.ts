import { ClienteRepositories } from '../../src/repositories/cliente.repositories';
import { HotelRepositories } from '../../src/repositories/hotel.repositories';
import { BuscarUsuarioPorEmailService } from '../../src/services/buscar-usuario-email.service';

test('Deve retornar nome, email e senha do cliente', async () => {
    
    const dataMock = {
        nome: 'João',
        email: 'j12@gmail.com',
        senha: '123456'
    }
    
    const buscarClientePorAtributo = jest.fn(); 
    buscarClientePorAtributo.mockResolvedValue(dataMock);
    
    const buscarHotelPorAtributo = jest.fn();
    buscarHotelPorAtributo.mockResolvedValue(false);
    
    const clienteRepo = new ClienteRepositories();
    const hotelRepo = new HotelRepositories();
    
    clienteRepo.buscarPorAtributo = buscarClientePorAtributo;
    hotelRepo.buscarPorAtributo = buscarHotelPorAtributo;

    const buscarUsuarioEmail = new BuscarUsuarioPorEmailService(
        clienteRepo,
        hotelRepo
    );

    const resposta = await buscarUsuarioEmail.buscar(dataMock.email);

    expect(resposta).toEqual(dataMock);

})