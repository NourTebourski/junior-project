const { category } = require("../models");


module.exports = {
    addcategory: async (req, res) => {
      try {
        const { name } = req.body;
        const add = await category.create({
          name,
        });
        res.status(200).send(add);
      } catch (error) {
        throw error;
      }
    },
    getcategory: async (req, res) => {
      try {
        const cata = await category.findAll();
        res.status(200).send(cata);
      } catch (error) {
        throw error;
      }
    },
    deletecategory: async (req, res) => {
      try {
        const { id } = req.params;
        await category.destroy({
          where: {id},
        });
        res.status(200).send("deleted");
      } catch (error) {
        throw error;
      }
    },
    updatecategory: async (req, res) => {
      try {
        const { id } = req.params;
        const { name } = req.body;
        await category.update(
          (updated = {
            name,
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
  };
