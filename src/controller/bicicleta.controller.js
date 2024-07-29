const { Bicicleta } = require('../models');

const getAllBicicletas = async (req, res) => {
    try {
        const bicicletas = await Bicicleta.findAll();
        res.json(bicicletas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getBicicletaById = async (req, res) => {
    try {
        const bicicleta = await Bicicleta.findByPk(req.params.id);
        if (bicicleta) {
            res.json(bicicleta);
        } else {
            res.status(404).json({ message: 'Bicicleta no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createBicicleta = async (req, res) => {
    try {
        const bicicleta = await Bicicleta.create(req.body);
        res.status(201).json(bicicleta);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateBicicleta = async (req, res) => {
    try {
        const [updated] = await Bicicleta.update(req.body, {
            where: { id_bicicleta: req.params.id }
        });
        if (updated) {
            const updatedBicicleta = await Bicicleta.findByPk(req.params.id);
            res.json(updatedBicicleta);
        } else {
            res.status(404).json({ message: 'Bicicleta no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteBicicleta = async (req, res) => {
    try {
        const deleted = await Bicicleta.destroy({
            where: { id_bicicleta: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Bicicleta no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllBicicletas,
    getBicicletaById,
    createBicicleta,
    updateBicicleta,
    deleteBicicleta
};
