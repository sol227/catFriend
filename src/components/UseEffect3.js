import UseEffect3sub from "./UseEffect3sub";
import { useState } from "react";

const UseEffect3 = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <section>
      <h2>UseEffect3</h2>
      {/* 토글버튼 */}
      <button onClick={handleToggle}>{isToggle ? "보임" : "숨김"}</button>
      {isToggle && <UseEffect3sub />}
    </section>
  );
};

export default UseEffect3;
