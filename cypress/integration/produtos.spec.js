/// <reference types="cypress" />

describe('Produtos - Testes da funcionalidade produtos', () => {
    it('Listar produtos', () => {
        cy.request({
            method: 'GET',
            url: 'produtos'
         }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.produtos[0].nome).to.equal('Logitech MX Vertical')
            expect(response.duration).to.be.lessThan(20)//tempo da requisição
         })
    });

    it('Cadastrar produto', () => {
        cy.request({
            method: 'POST',
            url: 'produtos',
            body: {
                "nome": "Pc Galileo",
                "preco": 1970,
                "descricao": "Notebook",
                "quantidade": 551,
                // "_id": "BeeJh5lz3k6kSIzy"
            },
            headers: {authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFub0BxYS5jb20iLCJwYXNzd29yZCI6InRlc3RlIiwiaWF0IjoxNzA0Nzc1MTMxLCJleHAiOjE3MDQ3NzU3MzF9.UDKrbphuUiasofVtcYx_9PbzJ78cRoMFBURZlxLvdsc'}
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.message).to.equal('Cadastro realizado com sucesso')
        })
    });
});