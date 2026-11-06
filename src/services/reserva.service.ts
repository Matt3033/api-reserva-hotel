import { IncluirReservaDTO } from '../dtos/reserva.dto';
import { Status } from '../models/reserva';
import { ClienteRepositories } from '../repositories/cliente.repositories';
import { QuartoRepositories } from '../repositories/quarto.repositories';
import { ReservaRepositories } from '../repositories/reserva.repositories';
import { typeRetornoSimples } from '../repositories/reserva.repositories';

export class ReservaService {
    
    constructor(
        private readonly reservaRepo: ReservaRepositories,
        private readonly clienteRepo: ClienteRepositories,
        private readonly quartoRepo: QuartoRepositories
    ) {}
    
    public async incluirReserva(data: IncluirReservaDTO): Promise<typeRetornoSimples | false> {
        
        const clienteExiste = await this.clienteRepo.buscarPorAtributo({ _id: data.idCliente });
        if (!clienteExiste) throw new Error('Cliente não existe');

        const quartoExiste = await this.quartoRepo.buscarPorAtributo({_id: data.idQuarto});
        if (!quartoExiste) throw new Error('Quarto não existe');

        const dataCheckin_ = new Date(data.dataCheckin);
        const dataCheckout_ = new Date(data.dataCheckout); 

        if (dataCheckout_ <= dataCheckin_) {
            throw new Error('O checkout deve ser feito em uma data posterior ao checkin');
        }

        const tempoDecorridoMs = dataCheckout_.getTime() - dataCheckin_.getTime();
        const dias = Math.floor(tempoDecorridoMs / (1000 * 3600 * 24));
        const custoTotal = dias * quartoExiste.preco;
    
        data.dataCheckin = dataCheckin_;
        data.dataCheckout = dataCheckout_;
        data.custoTotal = custoTotal;
        const dadosEnvio = {
            ...data,
            dataReserva: new Date(),
            status: Status.EM_ANDAMENTO
        }

        const resposta = await this.reservaRepo.incluir(dadosEnvio);
        return resposta;
    }
}