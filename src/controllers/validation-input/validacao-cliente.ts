import { Validacao } from './validacao';

export class ValidacaoCliente extends Validacao {
    
    constructor(campos: any) {
        super(campos);
    }

    public validar(): { [key: string]: string[] }[] {
        
        const camposVazios = this.camposObrigatoriosVazios();
        if (camposVazios.length > 0) {
            this.erros.push({ 'campos não preenchidos': camposVazios });
            
            return this.erros;
        }
        
        const errosNome = this.nome();
        if (errosNome.length > 0) this.erros.push({ 'nome': errosNome });

        const erroEmail = this.email();
        if (erroEmail.length > 0) this.erros.push({ 'email': erroEmail });

        const errosSenha = this.senha();
        if (errosSenha.length > 0) this.erros.push({ 'senha': errosSenha});
        
        if (this.erros.length > 0) return this.erros;

        return [];
    }

    private nome(): string[] {
        const erros: string[] = [];
        const nome = this.campos['nome'];
        
        if (typeof nome !== 'string') erros.push('o nome deve ser texto'); 
        else {
            if (nome.length > 50) erros.push('o nome deve ter até 50 caracteres');
        }

        return erros;
    }
    
    private email(): string[] {
        const erros: string[] = [];
        const email = this.campos['email'];
        
        if (typeof email !== 'string') erros.push('o e-mail deve ser texto');
        else {
            const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!reg.test(email)) erros.push('o formato do e-mail está inválido');
        }

        return erros;
    }

    private senha(): string[] {
        const erros: string[] = [];
        const senha = this.campos['senha'];
        
        if (typeof senha !== 'string') erros.push('a senha deve ser texto'); 
        else {
            if (senha.length < 8) erros.push('a senha precisa ter no mínimo 8 caracteres');
            
            const reg = /^(?=.*[A-Z])(?=.*[0-9]).+$/;
            if (!reg.test(senha)) {
                erros.push('a senha precisa conter pelo menos uma letra maiúscula e um número');
            }
        }

        return erros;
    }
}