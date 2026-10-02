import { Request, Response, Router } from 'express';
import { QuartoControllers } from '../controllers/quarto.controller';
import { QuartoService } from '../services/quarto.service';
import { HotelRepositories } from '../repositories/hotel.repositories';
import { QuartoRepositories } from '../repositories/quarto.repositories';

export class QuartoRoutes {

    private router: Router;
    private quartoCtrl: QuartoControllers

    constructor() {
        this.router = Router();
        this.quartoCtrl = new QuartoControllers(
            new QuartoService(
                new HotelRepositories(),
                new QuartoRepositories()
            )
        )
        this.post();
    }

    public getRouter(): Router {
        return this.router;
    }

    private post(): void {
        this.router.post('/', (req: Request, res: Response) => this.quartoCtrl.incluirQuarto(req, res))
    }
}