import { useState } from "react";

export const TextInput = () => {
  const [name, setName] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  return <input onChange={(e) => handleName(e)} type={"text"} value={name} />;
};