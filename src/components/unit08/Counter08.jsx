import { useEffect, useState } from "react";
import classes from "./Counter.module.scss";

export const Counter08 = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // ===============================================
  // # 01
  // ===============================================
  const countUp = () => {
    setCount((prevState) => prevState + 1);
  };

  const countDown = () => {
    setCount((prevState) => prevState - 1);
  };

  // ===============================================
  // # 02
  // ===============================================
  const count2Up = () => {
    setCount2((prevState) => prevState + 1);
  };

  const count2Down = () => {
    setCount2((prevState) => prevState - 1);
  };

  // ===============================================
  // # count01のレンダリングのみ動かす
  // ===============================================
  useEffect(() => {
    console.log("Current count is....", count);
  }, [count]);

  return (
    <div>
      <p>カウント：{count}</p>
      <div className={classes.wrapper}>
        <button onClick={countUp}>up</button>
        <button onClick={countDown}>down</button>
      </div>
      <p>カウント2：{count2}</p>
      <div className={classes.wrapper}>
        <button onClick={count2Up}>up</button>
        <button onClick={count2Down}>down</button>
      </div>
    </div>
  );
};
