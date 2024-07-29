module.exports = (sequelize, DataTypes) => {
    const Bicicleta = sequelize.define('Bicicleta', {
        id_bicicleta: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        numero_serie: {
            type: DataTypes.NUMERIC(5),
            allowNull: false
        },
        marca: {
            type: DataTypes.STRING,
            allowNull: false
        },
        modelo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'Bicicleta',
        timestamps: false,
    });

    return Bicicleta;
};
