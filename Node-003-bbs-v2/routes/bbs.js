// import express from "export";
// const router = express.Router();
import { Router } from "express";
const router = Router();

import multer from "multer";
import path from "path";
import fs from "fs";

/**
 * bbs API Router 설정
 * 보통 API 서버는 view 가 없이 JSON(또는 XML) 데이터를 client 로
 * return 하는 서버를 말한다.(Spring Rest Server)
 *
 * res.send() 또는 res.json() 함수로 마감한다
 *
 *
 */

const Hello = {
  title: "반가워 나 Node 야!",
  message: "Hello NodeJS BBS World",
};

// 파일을 저장할 폴더
const uploadPath = path.join("public/uploads");

const storageOption = {
  filename: (req, file, cb) => {
    const originName = file.originName;
    const filePrix = `${Date.now()}-${Math.round(Math.random() * 100000)}`;
    const fileName = `${filePrix}-${originName}`;
    cb(null, fileName);
  },
  destination: (req, file, cb) => {
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(uploadPath);
  },
};

const storage = multer.diskStorage(storageOption);
const uploadMiddleWare = multer({ storage: storage });

router.get("/", async (req, res, next) => {
  res.json(Hello);
});

router.post("/insert", uploadMiddleWare.single("b_image"), async (req, res) => {
  const body = req.body;
  const file = req.files;
  console.log(body);
  res.send("OK");
});

export default router;
