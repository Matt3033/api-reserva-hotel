import mongoose from 'mongoose';

export class ConexaoBancoMongo {
    
    private stringConexao: string;

    constructor(stringConexao: string) {
        this.stringConexao = stringConexao;
    }

    public async conexao() {
        try {
            await mongoose.connect(this.stringConexao);
        } catch (err: any) {
            throw new Error(err.message);
        }
    }
}