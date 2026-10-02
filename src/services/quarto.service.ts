import { IncluirQuartoDTO } from '../dtos/quarto.dto';
import { HotelRepositories } from '../repositories/hotel.repositories';
import { QuartoRepositories } from '../repositories/quarto.repositories';

export class QuartoService {

    constructor(
        private hotelRepo: HotelRepositories,
        private quartoRepo: QuartoRepositories
    ) { }

    public async incluirQuarto(data: IncluirQuartoDTO): Promise<{ nome: string, descricao: string }> {

        const hotelExiste = await this.hotelRepo.buscarPorAtributo({ _id: data.idHotel });
        if (!hotelExiste) {
            throw new Error('Esse hotel não existe');
        }

        const dataEnvio = {
            ...data,
            ocupado: false
        }

        const resposta = await this.quartoRepo.incluir(dataEnvio);
        return resposta;
    }
}