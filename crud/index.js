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

// Criar um novo curso
server.post('/cursos', (req, res) => {
  const { name } = req.body;

  cursos.push(name);

  return res.json(cursos);
})

// Atualizar um curso
server.put('/cursos/:index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);
});

server.delete('/cursos/:index', (req, res) => {
  const { index } = req.params;
  const name = cursos[index]

  cursos.splice(index, 1);

  return res.json({message: `O curso ${name} foi deletado`});
});

server.listen(3000)
