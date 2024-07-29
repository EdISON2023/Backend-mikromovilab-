const { Usuario } = require('../models');

const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUsuarioById = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateUsuario = async (req, res) => {
    try {
        const [updated] = await Usuario.update(req.body, {
            where: { id_usuario: req.params.id }
        });
        if (updated) {
            const updatedUsuario = await Usuario.findByPk(req.params.id);
            res.json(updatedUsuario);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteUsuario = async (req, res) => {
    try {
        const deleted = await Usuario.destroy({
            where: { id_usuario: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario
};
