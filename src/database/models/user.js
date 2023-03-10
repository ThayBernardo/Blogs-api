const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    displayName: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
    { timestamps: false }
  );

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foreignKey: "userId",
      as: "post"
    });
  };
  
  return User;
};
  
module.exports = User;