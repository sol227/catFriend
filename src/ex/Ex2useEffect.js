import { useEffect, useState } from "react";

const Ex2useEffect = () => {
  const [count, setCount] = useState(0);
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  const onReset = () => {
    setCount(0);
    setIsToggle(false);
  };

  useEffect(() => {
    let timer = null;
    if (isToggle) {
      timer = setInterval(() => {
        console.log("setInterval");
        setCount((num) => num + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      console.log("클린-업");
      clearInterval(timer);
    };
  }, [isToggle]);

  return (
    <div className="borderTop">
      <h2>1초 마다 카운트</h2>
      <h2>count: {count}</h2>
      <button onClick={handleToggle}>{isToggle ? "멈춤" : "시작"}</button>
      <button onClick={onReset}>정지 및 초기화</button>
    </div>
  );
};

export default Ex2useEffect;
