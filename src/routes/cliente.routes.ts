import { Router, Request, Response } from 'express';
import { ClienteControllers } from '../controllers/cliente.controllers';
import { ClienteRepositories } from '../repositories/cliente.repositories';
import { IncluirClienteService } from '../services/incluir-cliente.service';

export class ClienteRoutes {
    
    private router: Router;
    private clienteCtrl: ClienteControllers

    constructor() {
        this.router = Router();
        this.clienteCtrl = new ClienteControllers(
            new IncluirClienteService(new ClienteRepositories()), 
            new ClienteRepositories()
        );
        this.post();
    }

    public getRouter(): Router {
        return this.router;
    }

    private post(): void {
        this.router.post('/', async (req: Request, res: Response) => await this.clienteCtrl.incluirCliente(req, res));
    }

}

