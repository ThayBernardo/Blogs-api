const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    }, categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    }
  },
    { timestamps: false }
  );  

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'BlogPost',
      through: PostCategory,
      foreignKey: 'categoryId',
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
    });
  };

  return PostCategory;
};
      
module.exports = PostCategory;