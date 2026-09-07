import Hotel from '../models/hotel';
import { typeHotel } from '../types/hotel';
import { IUsuarioRepository } from './interfaces/usuario-repository';

export class HotelRepositories implements IUsuarioRepository<typeHotel> {

    public async incluir(data: typeHotel): Promise<{ nome: string, email: string }>{
        try {
            const hotel = new Hotel(data);
            const res = await hotel.save();

            return { nome: res.nome, email: res.email };
        } catch (err: any) {
            throw new Error(err.message);
        }
    }

    public async buscarPorAtributo(data: Partial<typeHotel>): Promise<{ nome: string, email: string, senha: string } | false> {
        try {
            const hotel = await Hotel.findOne(data);

            if (!hotel) {
                return false;
            }
            return { 
                nome: hotel.nome, 
                email: hotel.email, 
                senha: hotel.senha 
            };

        } catch (err: any) {
            throw new Error(err.message);
        }
    }
}