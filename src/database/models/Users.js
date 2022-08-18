module.exports = (sequelize, dataTypes) => {
  const alias = "Users";

  const collumns = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: dataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: dataTypes.STRING,
      allowNull: false
    },
    email: {
      type: dataTypes.STRING,
      allowNull: false,
      unique: true
    },
    senha: {
      type: dataTypes.STRING,
      allowNull: false
    },
    // type: {
    //   type: dataTypes.ENUM,
    //   values: ["user", "admin"],
    //   allowNull: false,
    //   defaultValue: "user"
    // }
  }

  const config = {
    tableName: "users",
    timestamps: false,
  }

  const Users = sequelize.define(alias, collumns, config);
  return Users;
}