export abstract class Validacao {
    
    protected erros: { [key: string]: string[] }[];
    protected campos: any;

    constructor(campos: any) {
        this.campos = campos;
        this.erros = [];
    }

    public abstract validar(): { [key: string]: string[] }[] | false;

    protected camposObrigatoriosVazios(): string[] {
        const camposVazios: string[] = [];
    
        const camposObrigatorios = Object.keys(this.campos);
        camposObrigatorios.forEach(elem => {
            if (this.campos[elem] === '' || this.campos[elem] === null) { 
                camposVazios.push(elem);
            }
        })

        return camposVazios;
    }
}