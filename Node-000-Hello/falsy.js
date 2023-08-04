// false, falsy, falsey 라는 개념
const yes = true;
const no = false;

const strNull = null;
const strBlank = "";
const numZero = 0;
let ValueUndefined;
const numNaN = NaN;
const notNum = 0n;

console.log(typeof strNull);
console.log(typeof strBlank);
console.log(typeof numZero);
console.log(typeof ValueUndefined);
console.log(typeof numNaN);
console.log(typeof notNum);

// 위에서 선언한 변수들을 if() 명령문에 포함 하거나
// ! 연산자를 동반하면 이 변수들의 성질이 true, false 인가? 로 바뀐다.
// falsy, falsey 형 데이터
if (!strNull) console.log("strNull 은", typeof strNull);
if (!strBlank) console.log("strBlank 은", typeof strBlank);
if (!numZero) console.log("numZero 은", typeof numZero);
if (!ValueUndefined) console.log("ValueUndefined 은", typeof ValueUndefined);
if (!numNaN) if (!strNull) console.log("numNaN 은", typeof numNaN);
if (!notNum) console.log("notNum 은", typeof notNum);

const num = 0;
if (num === 0) {
  console.log("Num 은 0이다");
} else {
  console.log("Num 은 0이 아니다.");
}

if (!num) console.log("진짜로 Num 은 0이네");

const strName = null;
if (!strName) console.log("이름이 없어요");
if (strName === null || strName === "") console.log("이름이 진짜없네");

console.log(strName || "홍길동");

const 구매자 = strName || "구매자 없음";
const 판매자 = "판매자없음";
if (strName !== null && strName !== "") {
  판매자 = strName;
}
