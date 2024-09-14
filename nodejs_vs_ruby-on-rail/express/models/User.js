// models/user.js
const { sequelize, Sequelize } = require("./index");

// Definisikan model User
const User = sequelize.define("User", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
});

// Sinkronisasi model dengan database (hanya pada awal, kemudian hapus atau komentari)
User.sync({ force: true }).then(() => {
    console.log("User table created successfully!");
});

module.exports = User;
