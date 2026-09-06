import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { ConexaoBancoMongo } from './config/db';
import { ClienteRoutes } from './routes/cliente.routes';
import { HotelRoutes } from './routes/hotel.routes';

dotenv.config()

const app: Express = express();
const PORTA = process.env.PORTA ?? 8080;
const stringConexao = process.env.STRING as string;

const baseEndpoints = '/api/v1';

app.use(express.json());
app.get(`${baseEndpoints}/health`, (req: Request, res: Response) => res.status(200).send({body: 'Health'}));

// Rotas
const clienteRoutes = new ClienteRoutes();
app.use(`${baseEndpoints}/clientes`, clienteRoutes.getRouter());

const hotelRoutes = new HotelRoutes();
app.use(`${baseEndpoints}/hoteis`, hotelRoutes.getRouter());


app.listen(PORTA, async () => {
    const conexaoBancoMongo = new ConexaoBancoMongo(stringConexao);
    await conexaoBancoMongo.conexao();
    
    console.log(`Ouvindo em http://localhost:${PORTA}`);
})



