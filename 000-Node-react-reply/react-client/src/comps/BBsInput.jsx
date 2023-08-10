import React, { useEffect, useState } from "react";
import { filePreview, filesPreview } from "../modules/ImagePreview";

import css from "../css/BBsInput.module.css";
import { useBBsContext } from "../provider/BBsProvider";

const BBsInput = () => {
  const { bbs, setBBs, bbsInsertCB, imgRef, imgsRef } = useBBsContext();

  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);

  const setMainImage = (image) => {
    setImage(image);
  };

  const thumbImages = images.map((image) => {
    return (
      <img
        src={image}
        width="50px"
        alt=""
        onClick={(e) => setMainImage(image)}
      />
    );
  });

  const fileChangeHandler = async (e) => {
    const imgSrc = await filePreview(e.target.files[0]);
    setImage(imgSrc);
  };

  const filesChangHandler = async (e) => {
    const files = e.target.files;
    console.log(files);
    const imgSrcList = await Promise.all(filesPreview(files));

    setImages(imgSrcList);
  };

  const inputChangHandler = (e) => {
    const { name, value } = e.target;
    if (name === "b_date") {
      // 현재 시간을 포맷에 맞게 가져옴
      const formattedTime = getCurrentFormattedTime();
      setBBs({ ...bbs, [name]: formattedTime });
    } else {
      setBBs({ ...bbs, [name]: value });
    }
  };

  const insertButtonClickHandler = async () => {
    if (imgRef && imgRef.current) {
      bbsInsertCB();
    } else {
      console.log("Image input is not ready yet.");
    }
  };

  const [currentTime, setCurrentTime] = useState(getCurrentFormattedTime());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(getCurrentFormattedTime());
    }, 1000);
    return () => clearInterval(timerID);
  }, []);

  function getCurrentFormattedTime() {
    const now = new Date();
    const year = now.getFullYear().toString().slice(-2);
    const month = padZero(now.getMonth() + 1);
    const day = padZero(now.getDate());
    const hours = padZero(now.getHours());
    const minutes = padZero(now.getMinutes());
    const seconds = padZero(now.getSeconds());

    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
  }

  function padZero(num) {
    return (num < 10 ? "0" : "") + num;
  }

  return (
    <section className={css.main}>
      <h2>댓글을 달아볼까요?</h2>
      <div className={css.input_container}>
        <div>
          <input
            name="b_nickname"
            placeholder="닉네임"
            value={bbs.b_nickname}
            onChange={inputChangHandler}
          />
        </div>

        <div>
          <input
            name="b_content"
            placeholder="내용"
            value={bbs.b_content}
            onChange={inputChangHandler}
          />
        </div>
      </div>
      <div className={css.image_box}>
        <div>
          <label htmlFor="main_image">이미지</label>
          <input
            id="main_image"
            type="file"
            accept="image/*"
            onChange={fileChangeHandler}
            ref={imgRef}
          />
          <div className={css.thumb}>
            <img src={image ? image : ""} width="200px" />
          </div>
          <div>
            <input
              id="gallery_image"
              type="file"
              accept="image/*"
              multiple="multiple"
              onChange={filesChangHandler}
              ref={imgsRef}
            />
            <div className={css.thumb}>{thumbImages}</div>
          </div>
        </div>
      </div>
      <div className={css.button}>
        <button onClick={insertButtonClickHandler}>작성</button>
      </div>
      <div className="view"></div>
    </section>
  );
};
export default BBsInput;
