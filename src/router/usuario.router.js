const express = require('express');
const router = express.Router();
const {getAllClientes, getClienteById, createCliente, updateCliente, deleteCliente} = require('../controller/cliente.controller')

// Rutas CRUD para Cliente
router.get('/clientes', getAllClientes);
router.get('/:id', getClienteById);
router.post('/', createCliente);
router.put('/:id', updateCliente);
router.delete('/:id', deleteCliente);

module.exports = router;