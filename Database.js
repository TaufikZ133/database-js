import { Sequelize } from "sequelize";

const db = new Sequelize('auth_db','srv442907','',{
    host: '178.16.143.160',
    dialect: 'mysql'
});

export default db;
