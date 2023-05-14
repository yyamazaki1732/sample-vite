import { useEffect, useState } from "react";

export const ToggleButton08 = () => {
  const [value, setValue] = useState(false);
  const toggle = () => {
    setValue((prevState) => !prevState);
  };

  useEffect(() => {
    console.log("Current state is", value);
    if (value) {
      console.log("Subscribe");
    }
    // ===============================================
    // # 再レンダリングされる前に呼び出される
    // ===============================================
    return () => {
      console.log("Unsubscribs");
    };
  });

  return <button onClick={toggle}>{value ? "OPEN" : "CLOSE"}</button>;
};
