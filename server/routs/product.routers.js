const express = require("express");
const { addproduct, getproduct, deleteproduct, updateproduct } = require("../controllers/product.controllers");
const Router = express.Router()


Router.post('/add',addproduct)
Router.get('/',getproduct)
Router.delete('/:id',deleteproduct)
Router.put('/:id',updateproduct)



module.exports = Router