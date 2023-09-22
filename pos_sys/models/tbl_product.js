import Sequelize from "sequelize";
export default (sequelize) => {
  return sequelize.define(
    "tbl_product",
    {
      p_code: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      p_name: {
        type: Sequelize.DataTypes.STRING(30),
        allowNull: true,
      },
      p_price: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: true,
      },
      p_rem: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "tbl_product",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "p_code" }],
        },
      ],
    }
  );
};
