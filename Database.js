import { Sequelize } from "sequelize";

const db = new Sequelize('auth_db','root','',{
    password: '',
    host: 'localhost'
});

export default db;
