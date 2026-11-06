import { Request, Response } from 'express';
import { ReservaService } from '../services/reserva.service';

export class ReservaControllers {
    
    constructor(
        private readonly reservaService: ReservaService
    ){}

    public async incluirReserva(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body;

            const { idCliente, idQuarto, dataCheckin, dataCheckout, custoTotal } = data;
            if (!idCliente || !idQuarto || !dataCheckin || !dataCheckout || !custoTotal) {
                return res.status(422).send({ body: 'Preencha todos os campos' })
            }

            const resposta = await this.reservaService.incluirReserva(data);
            return res.status(201).send({ body: 'Reserva realizada', data: resposta })

        } catch (err: any) {
            return res.status(422).send({ body: err.message });
        }
    }

}