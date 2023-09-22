import express from "express";
import { tbl_order, tbl_product } from "./models"; // tbl_order와 tbl_product 모델을 가져옵니다.

const router = express.Router();

// 주문 생성
const 주문생성 = async (req, res) => {
  const { o_pcode, o_count } = req.body;

  try {
    // 제품 조회
    const product = await tbl_product.findOne({
      where: { p_code: o_pcode },
    });

    if (!product) {
      return res.status(404).json({ error: "제품을 찾을 수 없습니다." });
    }

    // 주문 생성
    const order = await tbl_order.create({
      o_pcode,
      o_count,
      o_total: o_count * product.p_price,
    });

    res.status(201).json(order);
  } catch (error) {
    console.error("주문 생성 중 오류 발생:", error);
    res.status(500).json({ error: "주문 생성에 실패했습니다." });
  }
};

router.post("/orders", 주문생성);

// 주문 목록 조회
const 주문목록조회 = async (req, res) => {
  try {
    const orders = await tbl_order.findAll();
    res.json(orders);
  } catch (error) {
    console.error("주문 목록 조회 중 오류 발생:", error);
    res.status(500).json({ error: "주문 목록 조회에 실패했습니다." });
  }
};

router.get("/orders", 주문목록조회);

// 주문 상세 정보 조회
const 주문상세조회 = async (req, res) => {
  const { o_seq } = req.params;

  try {
    const order = await tbl_order.findOne({
      where: { o_seq },
    });

    if (!order) {
      return res.status(404).json({ error: "주문을 찾을 수 없습니다." });
    }

    res.json(order);
  } catch (error) {
    console.error("주문 조회 중 오류 발생:", error);
    res.status(500).json({ error: "주문 조회에 실패했습니다." });
  }
};

router.get("/orders/:o_seq", 주문상세조회);

// 주문 수정
const 주문수정 = async (req, res) => {
  const { o_seq } = req.params;
  const { o_count } = req.body;

  try {
    const order = await tbl_order.findOne({
      where: { o_seq },
    });

    if (!order) {
      return res.status(404).json({ error: "주문을 찾을 수 없습니다." });
    }

    // 제품 조회
    const product = await tbl_product.findOne({
      where: { p_code: order.o_pcode },
    });

    if (!product) {
      return res.status(404).json({ error: "제품을 찾을 수 없습니다." });
    }

    order.o_count = o_count;
    order.o_total = o_count * product.p_price;

    await order.save();

    res.json(order);
  } catch (error) {
    console.error("주문 수정 중 오류 발생:", error);
    res.status(500).json({ error: "주문 수정에 실패했습니다." });
  }
};

router.put("/orders/:o_seq", 주문수정);

// 주문 삭제
const 주문삭제 = async (req, res) => {
  const { o_seq } = req.params;

  try {
    const order = await tbl_order.findOne({
      where: { o_seq },
    });

    if (!order) {
      return res.status(404).json({ error: "주문을 찾을 수 없습니다." });
    }

    await order.destroy();

    res.json({ message: "주문이 성공적으로 삭제되었습니다." });
  } catch (error) {
    console.error("주문 삭제 중 오류 발생:", error);
    res.status(500).json({ error: "주문 삭제에 실패했습니다." });
  }
};

router.delete("/orders/:o_seq", 주문삭제);

export default router;
