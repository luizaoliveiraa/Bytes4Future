# Contador

## Requisitos

- tem de ser possível ver o número - 1
- tem de ser possível incrementar - 2
- tem de ser possível decrementar - 3

### API

- GET: "/api/counter" - 1
  res = {number:number}

- POST: "/api/counter/increment" - 2
  res = {number:number}
- POST: "/api/counter/decrement" - 3
  res = {number:number}

### Frontend

- AO INICIAR A APP
   Fazemos um pedido ao GET: /api/counter
- Parágrafo
  Onde demonstra o número
- Botão +
  Fazer um pedido - POST: /api/counter/:increment
- Botão -
  Fazer um pedido - POST: /api/counter/:decrement