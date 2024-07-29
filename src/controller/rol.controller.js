const { Rol } = require('../models');

const getAllRoles = async (req, res) => {
    try {
        const roles = await Rol.findAll();
        res.json(roles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getRolById = async (req, res) => {
    try {
        const rol = await Rol.findByPk(req.params.id);
        if (rol) {
            res.json(rol);
        } else {
            res.status(404).json({ message: 'Rol no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createRol = async (req, res) => {
    try {
        const rol = await Rol.create(req.body);
        res.status(201).json(rol);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateRol = async (req, res) => {
    try {
        const [updated] = await Rol.update(req.body, {
            where: { id_rol: req.params.id }
        });
        if (updated) {
            const updatedRol = await Rol.findByPk(req.params.id);
            res.json(updatedRol);
        } else {
            res.status(404).json({ message: 'Rol no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteRol = async (req, res) => {
    try {
        const deleted = await Rol.destroy({
            where: { id_rol: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Rol no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllRoles,
    getRolById,
    createRol,
    updateRol,
    deleteRol
};
