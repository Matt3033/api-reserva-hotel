describe('Rotas reserva', () => {
    
    const baseURL = 'http://localhost:8080/api/v1';
    
    test('Deve retornar: idCliente, idQuarto, dataCheckin e custoTotal (endpoint POST /reservas', async () => {
        
        const dataCheckin = new Date('12-23-2026');
        const dataCheckout = new Date('12-27-2026');
        const dataMock = {
            idCliente: '6aed46c7ed8d31af718daf00',
            idQuarto: '6aee1468fde772c5975d7760',
            dataCheckin: dataCheckin,
            dataCheckout: dataCheckout,
            custoTotal: 4 * 224
        }

        const res = await fetch(baseURL + '/reservas', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataMock)
        })
        const json = await res.json();

        expect(json.body).toBe('Reserva realizada');
        expect(res.status).toBe(201);
        expect(json.data.idCliente).toBe(dataMock.idCliente);
        expect(json.data.idQuarto).toBe(dataMock.idQuarto);
        expect(new Date(json.data.dataCheckin)).toEqual(dataMock.dataCheckin);
        expect(json.data.custoTotal).toBe(dataMock.custoTotal);
    })

    test('Deve retornar o erro: O checkout deve ser feito em uma data posterior ao checkin (endpoint POST /hoteis', async () => {
        
        const dataCheckin = new Date('12-27-2026');
        const dataCheckout = new Date('12-23-2026');
        const dataMock = {
            idCliente: '6aed46c7ed8d31af718daf00',
            idQuarto: '6aee1468fde772c5975d7760',
            dataCheckin: dataCheckin,
            dataCheckout: dataCheckout,
            custoTotal: 4 * 224
        }

        const res = await fetch(baseURL + '/reservas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataMock)
        })
        const json = await res.json();

        expect(json.body).toBe('O checkout deve ser feito em uma data posterior ao checkin');
        expect(res.status).toBe(422);
    })
})