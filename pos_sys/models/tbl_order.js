import Sequelize from "sequelize";
export default (sequelize) => {
  return sequelize.define(
    "tbl_order",
    {
      o_seq: {
        autoIncrement: true,
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      o_pcode: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: true,
      },
      o_count: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: true,
      },
      o_total: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "tbl_order",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "o_seq" }],
        },
        {
          name: "F_PRODUCT",
          using: "BTREE",
          fields: [{ name: "o_pcode" }],
        },
      ],
    }
  );
};
