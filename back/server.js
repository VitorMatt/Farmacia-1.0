const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();
const PORT = 3000;

// const pool = new Pool({
//     user: 'postgres', 
//     host: 'localhost',
//     database: 'FarMarcia', 
//     password: 'Vitor281207.',
//     port: 5432,
// });

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.get('/', async(req, res) => {

    // const response = await pool.query('SELECT nome, cpf FROM clientes');

    const response = [{nome: 'Vitor', cpf: 12742908994}]
    res.json(response);
});

app.listen(PORT, () => {

    console.log('Rodando');
});