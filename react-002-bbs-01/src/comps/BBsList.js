import BBsItem from "./BBsItem";
import { useState, useEffect } from "react";
import "../css/BBS.css";
const BBsList = () => {
  const [bbs, setBbs] = useState([]);

  useEffect(() => {
    const getBBsListAll = async () => {
      const res = await fetch("/bbs");
      const result = await res.json();
      setBbs([...result]);
    };
    getBBsListAll();
  }, []);
  const BBsItemList = bbs.map((item) => {
    return <BBsItem item={item} key={item.b_seq} />;
  });
  return (
    <>
      <h1>게시판</h1>
      <table>
        <thead>
          <tr>
            <th>일련번호</th>
            <th>제목</th>
            <th>내용</th>
          </tr>
        </thead>
        <tbody>{BBsItemList}</tbody>
      </table>
    </>
  );
};
export default BBsList;
