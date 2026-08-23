import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { ConexaoBancoMongo } from './config/db';

dotenv.config()

const app: Express = express();
const PORTA = 8080;
const stringConexao = process.env.STRING as string;

app.get('/health', (req: Request, res: Response) => res.status(200).send({body: 'Health'}));

app.listen(PORTA, async () => {
    const conexaoBancoMongo = new ConexaoBancoMongo(stringConexao);
    await conexaoBancoMongo.conexao();
    
    console.log(`Ouvindo em http://localhost:${PORTA}`);
})



