/* eslint-disable prettier/prettier */
import { it, beforeAll, afterAll, describe} from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

// describe = contexto
describe('Transactions Routes',() => {
  // executar algum código antes que todos os testes executem
beforeAll( async () =>{
  await app.ready() // aguardar que o app esteja pronto
})

// executar algum código depois que todos os testes executem
afterAll( async () =>{
  await app.close() // fechar a aplicação
})

it('User can create a new transaction', async ()  => {
  await request(app.server)
  .post('/transactions')
  .send({
    title: 'New transactions',
    amount: 200,
    type: 'credit'
  })
   // espero que o resultado do statusCode seja igual a 201
  .expect(201)
})


 
  
})
