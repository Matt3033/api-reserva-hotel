
describe('Rotas cliente', () => {
    
    const baseURL = 'http://localhost:8080/api/v1';
    
    test('Cadastrar cliente (endpoint POST /clientes)', async () => {
        
        const dataMock = {
            nome: 'João',
            email: 'j12@gmail.com',
            senha: '123456'
        }
    
        const res = await fetch(baseURL + '/clientes', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataMock)
        })
        
        const json = await res.json();
        
        expect(json.body).toBe('Usuário cadastrado');
        expect(res.status).toBe(201);
        expect(json.data.nome).toBe(dataMock.nome);
        expect(json.data.email).toBe(dataMock.email);
    })
})
