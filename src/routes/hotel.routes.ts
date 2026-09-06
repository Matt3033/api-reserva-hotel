import { Request, Response, Router } from 'express';
import { HotelControllers } from '../controllers/hotel.controllers';
import { HotelService } from '../services/hotel.service';
import { HotelRepositories } from '../repositories/hotel.repositories';

export class HotelRoutes {
    
    private router: Router;
    private hotelCtrl: HotelControllers;

    constructor(){
        this.router = Router();
        this.hotelCtrl = new HotelControllers(
            new HotelService(new HotelRepositories)
        );
        this.post();
    }

    public getRouter(): Router {
        return this.router;
    }

    public post(): void {
        this.router.post('/', async (req: Request, res: Response) => await this.hotelCtrl.incluirHotel(req, res));
    }
}