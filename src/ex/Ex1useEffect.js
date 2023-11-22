import { useState } from "react";
import Ex1Sub from "./Ex1Sub";

const Ex1useEffect = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div>
      <button onClick={handleToggle}>{isToggle ? "보임" : "숨김"}</button>
      {/* 하위 컴포넌트를 만들고 현재 날짜, 시간이 1초마다 업데이트 */}
      {isToggle && <Ex1Sub />}
    </div>
  );
};

export default Ex1useEffect;
