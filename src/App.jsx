import { useState } from "react";
import Box from "./Box";
import Button from "./unit05/Button";
import { Article } from "./components/unit06/Article";
// import { TextInput } from "./components/unit07/TextInput";
import classes from "./App.module.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={classes.App}>
      <h1>Vite + React</h1>
      <h2 className={classes.heading}>unit07</h2>
      {/* <TextInput /> */}
      <h2 className={classes.heading}>unit06</h2>
      <Article title={"export & import を練習した日"} content={"2023/04/17"} />
      <h2 className={classes.heading}>unit05</h2>
      <Button />
      <h2 className={classes.heading}>gsap</h2>
      <Box />
      <h2 className={classes.heading}>default</h2>
      <div className={classes.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
