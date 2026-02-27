import Fastify from 'fastify'

const servidor = Fastify()

servidor.get('/usuarios', () => {
    return 'esta funcionando!'
})

servidor.listen({
    port: 3000
})