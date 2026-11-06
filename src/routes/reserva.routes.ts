import { Request, Response, Router } from 'express';
import { ReservaControllers } from '../controllers/reserva.controllers';
import { ReservaService } from '../services/reserva.service';
import { ReservaRepositories } from '../repositories/reserva.repositories';
import { ClienteRepositories } from '../repositories/cliente.repositories';
import { QuartoRepositories } from '../repositories/quarto.repositories';

export class ReservaRoutes {
    
    private router: Router;
    private reservaCtrl: ReservaControllers;

    constructor() {
        this.router = Router();
        this.reservaCtrl = new ReservaControllers(
            new ReservaService(
                new ReservaRepositories(),
                new ClienteRepositories(),
                new QuartoRepositories()
            ),
        )
        this.post();
    }

    public getRouter(): Router {
        return this.router;
    }

    private post(): void {
        this.router.post('/', async (req: Request, res: Response) => await this.reservaCtrl.incluirReserva(req, res));
    }
}