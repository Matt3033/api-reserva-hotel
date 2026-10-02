import { Hoteis } from '../models/hotel';
import { typeHotel } from '../types/hotel';
import { IUsuarioRepository } from './interfaces/usuario-repository';

type typeRetornoSimples = {
    nome: string,
    email: string
}

export class HotelRepositories implements IUsuarioRepository<typeHotel> {

    public async incluir(data: Omit<typeHotel, '_id'>): Promise<typeRetornoSimples> {
        try {
            const hotel = new Hoteis(data);
            const res = await hotel.save();

            return { nome: res.nome, email: res.email };
        } catch (err: any) {
            throw new Error(err.message);
        }
    }

    public async buscarPorAtributo(data: Partial<typeHotel>): Promise<typeRetornoSimples | false> {
        try {
            const hotel = await Hoteis.findOne(data);

            if (!hotel) {
                return false;
            }
            return {
                nome: hotel.nome,
                email: hotel.email,
            };

        } catch (err: any) {
            throw new Error(err.message);
        }
    }
}