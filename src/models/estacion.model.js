module.exports = (sequelize, DataTypes) => {
    const Estacion = sequelize.define('Estacion', {
        id_estacion: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
        },
        ubicacion: {
            type: DataTypes.STRING,
        },
        capacidad: {
            type: DataTypes.STRING,
        },
        cantidad_act: {
            type: DataTypes.INTEGER,
        },
        estado: {
            type: DataTypes.ENUM('Activo', 'Inactivo'),
        }
    }, {
        tableName: 'Estacion',
        timestamps: false,
    });

    return Estacion;
};
