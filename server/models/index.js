const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('saferide_db', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
  });
  sequelize.authenticate()
  .then(()=>console.log("database is connected"))
  .catch((err)=>console.error("le ileha ela lah",err))


  const category = require("./category.model")(sequelize,DataTypes);
  const product = require("./product.model")(sequelize,DataTypes);


// product to category 
category.hasMany(product,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    foreignKey : "categoryId"
  })
product.belongsTo(category,{foreignKey : "categoryId"})

// sequelize.sync({alter:true})
// .then(()=>{
//   console.log("table created")
// })
// .catch((err)=>console.log("errrrrr",err))
module.exports = {category,product}
