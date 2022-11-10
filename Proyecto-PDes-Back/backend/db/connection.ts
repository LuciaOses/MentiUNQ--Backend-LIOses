import { Sequelize } from 'sequelize';


const db = new Sequelize('node', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    // loging: flase,
});

export default db;