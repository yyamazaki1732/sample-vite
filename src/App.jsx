import { useState } from "react";
import Box from "./Box";
import { Button } from "./unit05/Button";
import { Article } from "./components/unit06/Article";
import { TextInput } from "./components/unit07/TextInput";
import { Counter } from "./components/unit07/Counter";
import { ToggleButton } from "./components/unit07/Toggle";
import { Counter08 } from "./components/unit08/Counter08";
import { ToggleButton08 } from "./components/unit08/Toggle08";
import { Fetch } from "./components/unit09/Fetch";
import classes from "./App.module.scss";

function App() {
  return (
    <div className={classes.App}>
      <h1>Vite + React</h1>
      <h2 className={classes.heading}>unit09</h2>
      <Fetch />
      <h2 className={classes.heading}>unit08</h2>
      <h3 className={classes.subheading}>Counter</h3>
      <ToggleButton08 />
      {/* <h3 className={classes.subheading}>Counter</h3>
      <Counter08 />
      <h2 className={classes.heading}>unit07</h2>
      <h3 className={classes.subheading}>Toggle</h3>
      <ToggleButton />
      <h3 className={classes.subheading}>Counter</h3>
      <Counter />
      <h3 className={classes.subheading}>TextInput</h3>
      <TextInput />
      <h2 className={classes.heading}>unit06</h2>
      <Article title={"export & import を練習した日"} content={"2023/04/17"} />
      <h2 className={classes.heading}>unit05</h2>
      <Button /> */}
      <h2 className={classes.heading}>gsap</h2>
      <Box />
    </div>
  );
}

export default App;
