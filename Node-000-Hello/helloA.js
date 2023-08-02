const useState = (num) => {
  const setNum = (num1) => (num = num1);
  return [num, setNum()];
};
const [num, setNum] = useState(0);

// const [n1, n2] = ["대한민국", "우리나라"];

const nations = ["대한민국", "우리나라"];
const [n1, n2] = nations;
console.log(n1);
console.log(n2);
// console.log("대한민국");
// console.log("Korea");

const nations2 = [...nations, "Korea"];
console.log(nations2);

// nations 배열을 nations3 에 복사하라
const nations3 = nations;
console.log("1", nations);
console.log("3", nations3);
nations3[0] = "republic";
console.log("1", nations);
// 배열 복사는 값을 복사하는것이 아니라, 배열이 저장되어 있는 주소를 복사하는 것
// 그렇기 때문에 nations3과 nations 가 가르키는 배열은 똑같은 주소이다.
// 그래서 nations3의 배열에 들어있는 내용을 바꾸면 nations 의 배열의 값 역시 변경된다.

console.log("시작", nations);
const nations4 = [...nations];
nations4[0] = "Republic of Korea";
console.log(nations);
console.log(nations4);
// ...nations 를 nations4에 복사하게 되면 ...nations는 전개 연산자 이기 때문에
// 각각의 값을 주소로 전달하는 것이 아니라 그 주소에 들어있는 값을 새로운 주소(배열)에 저장한다.
// 그렇기 때문에 nations 의 배열이 변화하지 않고
// nations와 nations4는 각각 독립적이게 된다.
