const { product, category } = require("../models");

module.exports = {
    addproduct: async (req, res) => {
      try {
        const { name ,price,discription,imageUrl,categoryId} = req.body;
        const add = await product.create({
          name ,price,discription,imageUrl,categoryId
        });
        res.status(200).send(add);
      } catch (error) {
        throw error;
      }
    },
    getproduct: async (req, res) => {
      try {
        const cata = await product.findAll({include : { model : category}});
        res.status(200).send(cata);
      } catch (error) {
        throw error;
      }
    },
    deleteproduct: async (req, res) => {
      try {
        const { id } = req.params;
        await product.destroy({
          where: {id},
        });
        res.status(200).send("deleted");
      } catch (error) {
        throw error;
      }
    },
    updateproduct: async (req, res) => {
      try {
        const { id } = req.params;
        const { name ,price,imageUrl,discription,categoryId} = req.body;
        await product.update(
          (updated = {
            name ,price,imageUrl,discription,categoryId
          }),
          {
            where: { id },
          }
        );
        res.status(200).send(updated)
      } catch (error) {
        throw error
      }
    },
    getproductByCategory: async (req, res) => {
      try {
        const cata = await product.findAll({where:{categoryId:req.params.id}});
        res.status(200).send(cata);
      } catch (error) {
        throw error;
      }
    },
  };