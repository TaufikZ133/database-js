import { Sequelize } from "sequelize";

const db = new Sequelize('auth_db','root','',{
    host: 'srv442907',
    dialect: 'mysql'
});

export default db;
