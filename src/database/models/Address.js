module.exports = (sequelize, dataTypes) => {
  const alias = "Address";

  const collumns = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    rua: {
      type: dataTypes.STRING,
      allowNull: false
    },
    bairro: {
      type: dataTypes.STRING,
      allowNull: false
    },
    UF: {
      type: dataTypes.STRING,
      allowNull: false,
      unique: true
    },
    num: {
      type: dataTypes.INTEGER,
      allowNull: false
    },
    complemento: {
      type: dataTypes.STRING,
      allowNull: false
    },
    cep: {
      type: dataTypes.INTEGER,
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
    tableName: "address",
    timestamps: false,
  }

  const Address = sequelize.define(alias, collumns, config);
  Address.associate = (models) => {
    Address.belongsTo(models.Users, {
      foreignKey: "user_id"
    })
  }

  return Address;
}