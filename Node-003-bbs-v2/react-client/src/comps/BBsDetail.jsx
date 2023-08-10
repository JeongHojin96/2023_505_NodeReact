import { useParams } from "react-router-dom";

const BBsDetail = () => {
  const { seq } = useParams();
  return (
    <>
      <h1>여기는 자세히보기</h1>
      <h2>SEQ : {seq}</h2>
    </>
  );
};

export default BBsDetail;
