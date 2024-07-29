module.exports = (sequelize, DataTypes) => {
    const Mantenimiento = sequelize.define('Mantenimiento', {
        id_mantenimiento: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_bicicleta: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Bicicleta', // Nombre de la tabla de bicicletas
                key: 'id_bicicleta'
            },
            allowNull: false
        },
        fecha_inicio: {
            type: DataTypes.DATE,
            allowNull: false
        },
        fecha_fin: {
            type: DataTypes.DATE,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'Mantenimiento',
        timestamps: false,
    });

    return Mantenimiento;
};
