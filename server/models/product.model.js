module.exports = (sequelize,DataTypes) =>{
    const product = sequelize.define(
        'product',
        {
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },  imageUrl: {
            type: DataTypes.TEXT,
            allowNull: false,
          },price: {
            type: DataTypes.INTEGER,
            allowNull: false,
          }, discription: {
            type: DataTypes.TEXT,
            allowNull: false,
          }, 
        },
        {
          
          timestamps: false,
        },
      );


return product
}