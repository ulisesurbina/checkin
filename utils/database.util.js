const { Sequelize, DataTypes } = require("sequelize");

const db = new Sequelize({
    dialect: "postgres",
    hots: "localhost",
    username: "postgres",
    password: "310332983",
    port: 5432,
    database: "checkin",
    logging: false,
});

module.exports = { db, DataTypes };