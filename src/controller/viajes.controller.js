const { Viaje } = require('../models');

const getAllViajes = async (req, res) => {
    try {
        const viajes = await Viaje.findAll();
        res.json(viajes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getViajeById = async (req, res) => {
    try {
        const viaje = await Viaje.findByPk(req.params.id);
        if (viaje) {
            res.json(viaje);
        } else {
            res.status(404).json({ message: 'Viaje no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createViaje = async (req, res) => {
    try {
        const viaje = await Viaje.create(req.body);
        res.status(201).json(viaje);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateViaje = async (req, res) => {
    try {
        const [updated] = await Viaje.update(req.body, {
            where: { id_viaje: req.params.id }
        });
        if (updated) {
            const updatedViaje = await Viaje.findByPk(req.params.id);
            res.json(updatedViaje);
        } else {
            res.status(404).json({ message: 'Viaje no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteViaje = async (req, res) => {
    try {
        const deleted = await Viaje.destroy({
            where: { id_viaje: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Viaje no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllViajes,
    getViajeById,
    createViaje,
    updateViaje,
    deleteViaje
};
