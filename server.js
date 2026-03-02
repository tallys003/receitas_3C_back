import Fastify from 'fastify'
import { Pool } from 'pg'

const sql = new Pool({
    user: "postgres",
    password: "senai",
    host: "localhost",
    port: 5432,
    database: "receita"
})

const servidor = Fastify()

servidor.get('/usuario', async () => {
    const resultado = await sql.query('select * from usuario')
    return resultado.rows
})

servidor.post('/usuario', async (request, replay) => {
    const nome = request.body.nome;
    const senha = request.body.senha;
    const resultado = await sql.query('INSERT INTO usuario (nome, senha) VALUES ($1,$2)',[nome, senha])
    return 'Usuario Cadastrado!'
})

servidor.listen({
    port: 3000
})