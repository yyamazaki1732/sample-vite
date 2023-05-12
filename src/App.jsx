import { useState } from "react";
import Box from "./Box";
import Button from "./unit05/Button";
import "./App.css";
import { Article } from "./components/unit06/Article";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <h2 className="heading">unit06</h2>
      <Article title={"export & import を練習した日"} content={"2023/04/17"} />
      <h2 className="heading">unit05</h2>
      <Button />
      <h2 className="heading">gsap</h2>
      <Box />
      <h2 className="heading">default</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs"></p>
    </div>
  );
}

export default App;
