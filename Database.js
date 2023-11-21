import { Sequelize } from "sequelize";

const db = new Sequelize({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'auth_db',
    port:"3306",
    dialect: "mysql"
});

export default db;