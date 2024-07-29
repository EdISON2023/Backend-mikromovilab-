module.exports = (sequelize, DataTypes) => {
    const Rol = sequelize.define('Rol', {
        id_rol: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'Roles',
        timestamps: false,
    });

    return Rol;
};
