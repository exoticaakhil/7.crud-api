const template = require('express').Router();
const { homeController, createController, editController } = require('../controller/templateController');

// Define the routes and associate them with the appropriate controllers
template.get('/', homeController);  // Route for homeController
template.get('/create', createController);  // Route for createController
template.get('/edit', editController);  // Route for editController

// Export the template router
module.exports = template;
