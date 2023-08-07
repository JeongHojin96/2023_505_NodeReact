import { useState } from "react";
const Add = () => {
  // const [num1, setNum1] = useState(0);
  // const [num2, setNum2] = useState(0);

  const [nums, setNums] = useState({ num1: 0, num2: 0 });

  const onChangeHandler = (e) => {
    // const value = e.target.value;
    const { name, value } = e.target;
    setNums({ ...nums, [name]: value });
  };

  // const intNum1 = Number(num1)
  // const intNum2 = Number(num2)
  // const [intNum1, intNum2] = [Number(num1), Number(num2)];

  return (
    <div className="input">
      <input
        name="num1"
        placeholder="NUM1"
        value={nums.num1}
        onChange={onChangeHandler}
      />
      <input
        name="num2"
        placeholder="NUM2"
        value={nums.num2}
        onChange={onChangeHandler}
      />

      <div>
        {nums.num1} + {nums.num2} = {Number(nums.num1) + Number(nums.num2)}
      </div>
      <div>
        {nums.num1} - {nums.num2} = {Number(nums.num1) - Number(nums.num2)}
      </div>
      <div>
        {nums.num1} * {nums.num2} = {Number(nums.num1) * Number(nums.num2)}
      </div>
      <div>
        {nums.num1} / {nums.num2} = {Number(nums.num1) / Number(nums.num2)}
      </div>
    </div>
  );
};

export default Add;
