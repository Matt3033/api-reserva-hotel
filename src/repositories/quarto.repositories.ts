import { Quartos } from '../models/quarto';
import { typeQuarto } from '../types/quarto';

export class QuartoRepositories {

    public async incluir(data: Omit<typeQuarto, '_id' >): Promise<{ nome: string, descricao: string }> {
        try {
            const quarto = new Quartos(data);
            const res = await quarto.save();

            return { nome: res.nome, descricao: res.descricao };
        } catch (err: any) {
            throw new Error(err.message);
        }
    }
}