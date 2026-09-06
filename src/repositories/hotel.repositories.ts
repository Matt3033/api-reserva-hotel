import Hotel from '../models/hotel';
import { typeHotel } from '../types/hotel';

export class HotelRepositories {

    public async incluirHotel(data: typeHotel) {
        try {
            const hotel = new Hotel(data);
            const res = await hotel.save();

            return { nome: res.nome, email: res.email };
        } catch (err: any) {
            throw new Error(err.message);
        }
    }

    public async buscarHotelPorAtributo(atributos: Partial<typeHotel>) {
        try {
            const hotel = await Hotel.findOne(atributos);

            if (!hotel) {
                return false;
            }
            return hotel;

        } catch (err: any) {
            throw new Error(err.message);
        }
    }
}