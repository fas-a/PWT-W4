// models/index.js
const { Sequelize } = require("sequelize");

// Konfigurasi database
const sequelize = new Sequelize("db_express", "postgres", "dika1708", {
    host: "localhost",
    dialect: "postgres",
});

// Fungsi untuk memeriksa koneksi ke database
sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((error) => {
        console.error("Unable to connect to the database:", error);
    });

// Ekspor sequelize dan Sequelize untuk digunakan di model lain
module.exports = { sequelize, Sequelize };
