import { useState } from "react";

export const ToggleButton = () => {
  const [value, setValue] = useState(false);
  const toggle = () => {
    setValue((prevState) => !prevState);
  };
  return <button onClick={toggle}>{value ? "OPEN" : "CLOSE"}</button>;
};
