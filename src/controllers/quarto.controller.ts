import { Request, Response } from 'express';
import { QuartoService } from '../services/quarto.service';

export class QuartoControllers {

    constructor(
        private readonly quartoServices: QuartoService
    ) { }

    public async incluirQuarto(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body;

            const { idHotel, nome, preco, descricao, fotos, qtdeHospedes } = data;

            if (!idHotel || !nome || !preco || !descricao || fotos.length === 0 || !qtdeHospedes) {
                return res.status(422).send({ body: 'Preencha todos os campos' });
            }

            const resposta = await this.quartoServices.incluirQuarto(data);
            return res.status(201).send({ body: 'Quarto cadastrado', data: resposta });

        } catch (err: any) {
            return res.status(422).send({ body: err.message });
        }
    }
}