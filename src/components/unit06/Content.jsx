import classes from "./Content.module.scss";

export default function Content(props) {
  return <p className={classes.text}>{props.content}</p>;
}
