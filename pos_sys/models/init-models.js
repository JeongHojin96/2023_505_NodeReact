import _tbl_order from "./tbl_order.js";
import _tbl_product from "./tbl_product.js"; // 파일 경로에 점 추가

const initModels = (sequelize) => {
  const tbl_order = _tbl_order(sequelize);
  const tbl_product = _tbl_product(sequelize);

  tbl_product.hasMany(tbl_order, { as: "F_ORDER", foreignKey: "o_pcode" });
  tbl_order.belongsTo(tbl_product, {
    as: "F_PRODUCT",
    foreignKey: "o_pcode",
  });

  // 다른 곳에서 model을 사용할 수 있도록 export 준비
  return {
    tbl_order,
    tbl_product,
    // tbl_bbs 모델 추가
  };
};

export default initModels;
