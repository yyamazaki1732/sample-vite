import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount((prevState) => prevState + 1);
  };

  const countDown = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <div>
      <p>現在のカウント数：{count}</p>
      <div className={classes.wrapper}>
        <button onClick={countUp}>up</button>
        <button onClick={countDown}>down</button>
      </div>
    </div>
  );
};
