const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define("BlogPost", {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    }, title: {
      type: DataTypes.STRING,
      allowNull: false,
    }, content: {
      type: DataTypes.STRING,
      allowNull: false,
    }, userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    }, published: {
      type: DataTypes.DATE,
      allowNull: false,
    }, updated: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  },
    { timestamps: false }
  );  

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user"
    });
  };

  return BlogPost;
};
      
module.exports = BlogPost;