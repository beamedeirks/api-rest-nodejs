/* eslint-disable prettier/prettier */
import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { transactionsRoutes } from './routes/transactions'

export const app = fastify()

app.register(cookie)

// Hook Global
app.addHook('preHandler', async (request) => {
  console.log(`[${request.method}] ${request.url}`)
})

// plugin
app.register(transactionsRoutes, {
  prefix: 'transactions',
})