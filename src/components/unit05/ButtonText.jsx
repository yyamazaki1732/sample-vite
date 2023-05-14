import classes from "./ButtonText.module.scss";

// jsでクラスを定義
// そのスコープが対象コンポーネントの外に出る事はない
const buttonStyle = {
  display: "flex",
  justifyContent: "spaceBetween",
  alignItems: "center",
  padding: "20px 60px",
  backgroundColor: "skyblue",
  borderRadius: "24px",
  columnGap: "12px",
};

export const ButtonText = (props) => {
  return (
    <div style={buttonStyle}>
      <h1 className={classes.ButtonTitle}>{props.title}</h1>
      <h2 className={classes.ButtonContent}>{props.content}</h2>
    </div>
  );
};

// export default ButtonText;
