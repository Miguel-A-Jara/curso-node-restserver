const { request, response } = require('express');

const usuariosGet = (req = request, res = response) => {
  
  const { q, nombre, apikey } = req.query;

  res.json({
    msg: 'get API - controlador',
    q, 
    nombre,
    apikey
  });
};

const usuariosPut = (req = request, res = response) => {
  const { id } = req.params;

  res.status(500).json({
    msg: 'put API - controlador',
    id,
  });
};

const usuariosPost = (req, res) => {
  const { nombre, edad } = req.body;

  res.status(201).json({
    msg: 'post API - controlador',
    nombre,
    edad,
  });
};

const usuariosDelete = (req, res) => {
  res.json({
    msg: 'delete API - controlador',
  });
};

const usuariosPatch = (req, res) => {
  res.json({
    msg: 'path API - controlador',
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
};
