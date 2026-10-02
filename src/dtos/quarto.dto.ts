import { ObjectId } from 'mongoose';

export class IncluirQuartoDTO {
    public idHotel!: ObjectId;
    public nome!: string;
    public preco!: number;
    public descricao!: string;
    public fotos!: string[];
    public qtdeHospedes!: number;
}