const express = require("express");
const { addcategory, getcategory, deletecategory, updatecategory } = require("../controllers/category.controllers");
const Router = express.Router()


Router.post('/add',addcategory)
Router.get('/',getcategory)
Router.delete('/:id',deletecategory)
Router.put('/:id',updatecategory)



module.exports = Router