module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        id_usuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        correo_electronico: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        contrasena: {
            type: DataTypes.STRING,
            allowNull: false
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id_rol: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Roles', // Nombre de la tabla de roles
                key: 'id_rol'
            }
        }
    }, {
        tableName: 'Usuario',
        timestamps: false,
    });

    return Usuario;
};
