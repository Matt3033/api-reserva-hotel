import { Request, Response } from 'express';
import { HotelService } from '../services/hotel.service';

export class HotelControllers {
    
    constructor(
        private readonly hotelService: HotelService
    ){}

    public async incluirHotel(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body;
            const { nome, email, senha, endereco } = data;

            if (!nome || !email || !senha || !endereco) {
                return res.status(422).send({ body: 'Preencha todos os campos' });
            }

            const resposta = await this.hotelService.incluirHotel(data);
            return res.status(201).send({ body: 'Usuário cadastrado', data: resposta })

        } catch (err: any) {
            return res.status(422).send({ body: err.message });
        }
    }
}