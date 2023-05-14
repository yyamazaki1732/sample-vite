import { useEffect, useState } from "react";

export const Fetch = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("deatiger");
  const ids = [`deatiger`, `aws`, `google`, `yyamazaki1732`];

  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)];
    setId(_id);
  };

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setName(data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <p>
        {id}の、GitHub上の名前は{name}です。
      </p>
      <button onClick={getRandomId}>IDを変更</button>
    </div>
  );
};
