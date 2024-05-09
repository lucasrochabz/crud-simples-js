const express = require('express');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors()); // Use o middleware cors

const cursos = ['HTML e CSS', 'JavaScript', 'React'];

// Retornar todos os cursos
server.get('/cursos', (req, res) => {
  return res.json(cursos);
})

// Retornar um curso
server.get('/cursos/:index', (req, res) => {
  const { index } = req.params;

  return res.json(cursos[index])
})

server.listen(3000)
