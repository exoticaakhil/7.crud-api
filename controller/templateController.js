const { StatusCodes } = require("http-status-codes");
const path = require('path');

const homeController = async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "../view/index.html"));
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Error occurred while processing the request.");
    }
};

const createController = async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "../view/create.html"));
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Error occurred while processing the request.");
    }
};

const editController = async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "../view/update.html"));
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Error occurred while processing the request.");
    }
};

// Exporting the controllers
module.exports = {
    homeController,
    createController,
    editController
};
