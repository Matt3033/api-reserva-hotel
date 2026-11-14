import { ValidacaoCliente } from '../../src/controllers/validation-input/validacao-cliente';

describe('Testes para o método validar() da classe ValidacaoCliente que é padrão de implementação para as demais', () => {
    
    test('Deve retornar um array vazio - sem erros', () => {
        const validacaoCliente = new ValidacaoCliente({ nome: 'Matheus123', email: 'eu123@gmail.com', senha: 'A1234Eba' });
        const errosInput = validacaoCliente.validar();

        expect(errosInput).toHaveLength(0);
    })
    
    test('Deve retornar que os campos nome, e-mail e senha não foram preenchidos', () => {
        const validacaoCliente = new ValidacaoCliente({ nome: null, email: '', senha: '' });
        const errosInput = validacaoCliente.validar();

        expect(errosInput).toHaveLength(1);
        expect(errosInput[0]).toEqual({ 'campos não preenchidos': ['nome', 'email', 'senha'] });
    })

    test('Deve retornar os erros de formato dos dados para o cliente em um array do tipo { [string]: string[] }', () => {
        const validacaoCliente = new ValidacaoCliente({ nome: 123, email: '123.com', senha: 'matheus' });
        const errosInput = validacaoCliente.validar();

        expect(errosInput[0]).toEqual({ 'nome': ['o nome deve ser texto'] });
        expect(errosInput[1]).toEqual({ 'email': ['o formato do e-mail está inválido'] });
        expect(errosInput[2]).toEqual({
            'senha': ['a senha precisa ter no mínimo 8 caracteres', 
            'a senha precisa conter pelo menos uma letra maiúscula e um número']
        });
    })   
})