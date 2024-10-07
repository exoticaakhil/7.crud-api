const userController = require("../controller/userController");

const userRoute = require('express').Router()
userRoute.get(`/all`,userController.readAll)
userRoute.get(`/single/:id`,userController.readSingle)
userRoute.post(`/create`,userController.createuser)
userRoute.patch(`/update/:id`,userController.updateUser)
userRoute.delete(`/delete/:id`,userController.deleteUser)
module.exports= userRoute
