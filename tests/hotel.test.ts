describe('Rotas hotel', () => {

    test('Cadastrar hotel (endpoint POST /hoteis)', async () => {

        const baseURL = 'http://localhost:8080/api/v1';

        const dataMock = {
            nome: 'Hotel Rosas',
            email: 'h12@gmail.com',
            senha: '12345',
            endereco: 'Jd. Rosas, rua 122, SP, SP',
        }

        const res = await fetch(baseURL + '/hoteis', {
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