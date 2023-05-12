import classes from "./Title.module.scss";

const Title = (props) => {
  return <h1 className={classes.title}>{props.title}</h1>;
};
export default Title;
