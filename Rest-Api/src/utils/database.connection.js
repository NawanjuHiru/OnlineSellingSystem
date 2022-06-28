const mongoose = require("mongoose");

const databaseConnection = () => {
    const connectionString = process.env.connectionString;
    mongoose.connect(connectionString, () => {
        console.log("Connected to the Database");
    });
};

module.exports = databaseConnection;