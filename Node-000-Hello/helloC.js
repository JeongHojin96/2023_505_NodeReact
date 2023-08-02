/**
 * JSON 객체(JavaScript Object Notation)
 * {key:value} 쌍으로 구성된 데이터 type
 */
const obj = {
  이름: "홍길동",
  나이: 16,
  전화: "010-111-1111",
};
console.log(obj);
console.log(obj.이름);
console.log(obj.나이);
console.log(obj.전화);

console.log(obj["이름"]);
console.log(obj["나이"]);
console.log(obj["전화"]);

const searchKey = "이름";
console.log(obj[searchKey]);

// JSON 배열
// address 객체에
const address = [
  { 이름: "홍길동", 나이: 16, 전화: "1111" },
  { 이름: "가길동", 나이: 13, 전화: "3333" },
  { 이름: "마길동", 나이: 14, 전화: "2222" },
];
console.log(address[1].이름);
console.log(address[1].나이);
console.log(address[1].전화);
address.forEach((item) => {
  console.log("이름", item.이름, "나이", item.나이);
});
