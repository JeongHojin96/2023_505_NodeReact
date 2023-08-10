import { useBBsContext } from "../provider/BBsProvider";
import css from "../css/BBsList.module.css";

const BBsList = () => {
  const { bbsList, setBBsList } = useBBsContext();

  const bbsItems = bbsList.map((bbs) => {
    return (
      <div key={bbs.b_seq} data-seq={bbs.b_seq}>
        <div className="list_nick">{bbs.b_nickname}</div>
        {bbs.b_image && ( // bbs.b_image 값이 존재할 때만 이미지 렌더링
          <div>
            <img
              src={`/static/upload/${bbs.b_image}`}
              width="200px"
              alt={bbs.b_origin_name}
            />
          </div>
        )}
        <div className="list_content">{bbs.b_content}</div>
        <div className="list_date">{bbs.b_date}</div>
      </div>
    );
  });

  /*
  JS 의 join() 함수 : 배열의 요소를 하나의 문자열로 변환하는 함수
  const arr = [1,2,3,4,5,6]
  const str = arr.join(" ")
  str => "1 2 3 4 5 6" 과 같은 문자열을 만들어 낸다
  */

  return (
    <>
      <div>{bbsItems}</div>
    </>
  );
};

export default BBsList;
