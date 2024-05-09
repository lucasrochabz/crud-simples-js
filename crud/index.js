const express = require('express');
const cors = require('cors'); // Importe o pacote cors

const server = express();

server.use(express.json());
server.use(cors()); // Use o middleware cors

const cursos = ['HTML e CSS', 'JavaScript', 'React'];

// Retornar todos os cursos
server.get('/cursos', (req, res) => {
  return res.json(cursos);
})

server.listen(3000)
