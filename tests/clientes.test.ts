
describe('Testes para o cliente', () => {

    test('Cadastrar cliente (endpoint POST /clientes)', async () => {
        
        const dataMock = {
            nome: 'Matheus',
            email: 'mz@gmail.com',
            senha: '123456'
        }
    
        const res = await fetch('http://localhost:8080/api/v1/clientes', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataMock)
        })
        const resultado = await res.json();

        expect(res.status).toBe(201);
        expect(resultado.body).toBe('Usuário cadastrado');
        expect(resultado.data.nome).toBe(dataMock.nome);
        expect(resultado.data.email).toBe(dataMock.email);
    })
})
