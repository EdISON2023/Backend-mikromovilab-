const { Estacion } = require('../models');

const getAllEstaciones = async (req, res) => {
    try {
        const estaciones = await Estacion.findAll();
        res.json(estaciones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getEstacionById = async (req, res) => {
    try {
        const estacion = await Estacion.findByPk(req.params.id);
        if (estacion) {
            res.json(estacion);
        } else {
            res.status(404).json({ message: 'Estación no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createEstacion = async (req, res) => {
    try {
        const estacion = await Estacion.create(req.body);
        res.status(201).json(estacion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateEstacion = async (req, res) => {
    try {
        const [updated] = await Estacion.update(req.body, {
            where: { id_estacion: req.params.id }
        });
        if (updated) {
            const updatedEstacion = await Estacion.findByPk(req.params.id);
            res.json(updatedEstacion);
        } else {
            res.status(404).json({ message: 'Estación no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteEstacion = async (req, res) => {
    try {
        const deleted = await Estacion.destroy({
            where: { id_estacion: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Estación no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllEstaciones,
    getEstacionById,
    createEstacion,
    updateEstacion,
    deleteEstacion
};
