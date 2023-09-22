import express from "express";
import db from "./db";
import { tbl_product } from "./models"; // tbl_product 모델을 가져옵니다.

const app = express();
const port = 3000;

app.use(express.json());

// 제품 목록 조회
const getProducts = async (req, res) => {
  try {
    const products = await tbl_product.findAll(); // tbl_product 모델을 사용하여 제품 목록을 조회합니다.
    res.json(products);
  } catch (error) {
    console.error("제품을 불러오는 중 오류 발생:", error);
    res.status(500).json({ error: "제품을 불러오는 데 실패했습니다." });
  }
};

app.get("/products", getProducts);

// 제품 추가
const createProduct = async (req, res) => {
  const { p_code, p_name, p_price, p_rem } = req.body;

  try {
    const product = await tbl_product.create({
      p_code,
      p_name,
      p_price,
      p_rem,
    });
    res.status(201).json(product);
  } catch (error) {
    console.error("제품을 추가하는 중 오류 발생:", error);
    res.status(500).json({ error: "제품을 추가하는데 실패했습니다." });
  }
};

app.post("/products", createProduct);

// 제품 상세 정보 조회
const getProduct = async (req, res) => {
  const { p_code } = req.params;

  try {
    const product = await tbl_product.findOne({
      where: { p_code },
    });

    if (!product) {
      return res.status(404).json({ error: "제품을 찾을 수 없습니다." });
    }

    res.json(product);
  } catch (error) {
    console.error("제품을 불러오는 중 오류 발생:", error);
    res.status(500).json({ error: "제품을 불러오는데 실패했습니다." });
  }
};

app.get("/products/:p_code", getProduct);

// 제품 수정
const updateProduct = async (req, res) => {
  const { p_code } = req.params;
  const { p_name, p_price, p_rem } = req.body;

  try {
    const product = await tbl_product.findOne({
      where: { p_code },
    });

    if (!product) {
      return res.status(404).json({ error: "제품을 찾을 수 없습니다." });
    }

    product.p_name = p_name;
    product.p_price = p_price;
    product.p_rem = p_rem;

    await product.save();

    res.json(product);
  } catch (error) {
    console.error("제품을 수정하는 중 오류 발생:", error);
    res.status(500).json({ error: "제품을 수정하는데 실패했습니다." });
  }
};

app.put("/products/:p_code", updateProduct);

// 제품 삭제
const deleteProduct = async (req, res) => {
  const { p_code } = req.params;

  try {
    const product = await tbl_product.findOne({
      where: { p_code },
    });

    if (!product) {
      return res.status(404).json({ error: "제품을 찾을 수 없습니다." });
    }

    await product.destroy();

    res.json({ message: "제품을 성공적으로 삭제했습니다." });
  } catch (error) {
    console.error("제품을 삭제하는 중 오류 발생:", error);
    res.status(500).json({ error: "제품을 삭제하는데 실패했습니다." });
  }
};

app.delete("/products/:p_code", deleteProduct);

app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});
