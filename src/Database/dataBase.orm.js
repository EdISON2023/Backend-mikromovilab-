const { Sequelize } = require("sequelize");
const { MYSQLHOST, MYSQLUSER, MYSQLPASSWORD, MYSQLDATABASE, MYSQLPORT, MYSQL_URI } = require("../keys");

let sequelize;

// Usar URI de conexión si está disponible
if (MYSQL_URI) {
    sequelize = new Sequelize(MYSQL_URI);
} else {
    // Configuración para parámetros individuales
    sequelize = new Sequelize(MYSQLDATABASE, MYSQLUSER, MYSQLPASSWORD, {
        host: MYSQLHOST,
        port: MYSQLPORT,
        dialect: 'mysql',
        pool: {
            max: 10,
            min: 2,
            acquire: 30000,
            idle: 10000
        }
    });
}

// Autenticar y sincronizar
sequelize.authenticate()
    .then(() => {
        console.log("Conexión establecida con la base de datos");
    })
    .catch((err) => {
        console.error("No se pudo conectar a la base de datos:", err.message);
    });

sequelize.sync({ force: false })
    .then(() => {
        console.log("Tablas sincronizadas");
    })
    .catch((err) => {
        console.error("Error al sincronizar las tablas:", err.message);
    });

//extracionModelos
// const userModel = require('../models/user.model');
const Usuario = require('../models/usuario.model')(sequelize, Sequelize);
const Bicicleta  = require('../models/bicicleta.model')(sequelize, Sequelize);
const Estacion = require('../models/estacion.model')(sequelize, Sequelize);
const Rol  = require('../models/rol.model')(sequelize, Sequelize);
const Mantenimiento  = require('../models/mantenimiento.model')(sequelize, Sequelize);


//zincronia tablas
// const user = userModel(sequelize, Sequelize)

Usuario.hasMany(Rol,{foreignkey:'id_usuario'})

//relaciones
sequelize.sync({ alter: true }) // alter will update the database schema to match the model
    .then(() => {
        console.log('Database synchronized');
    })
    .catch((error) => {
        console.error('Error synchronizing the database:', error);
    });

// Exportar el objeto sequelize
module.exports = {sequelize, Bicicleta, Usuario, Estacion, Rol, Mantenimiento
    
};