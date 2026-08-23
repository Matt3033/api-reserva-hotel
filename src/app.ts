import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config()

const app: Express = express();
const PORTA = 8080;

app.get('/health', (req: Request, res: Response) => res.status(200).send({body: 'Health'}));

app.listen(PORTA, () => {
    console.log(`Ouvindo em http://localhost:${PORTA}`);
})



