import classes from "./PublishButton.module.scss";

const PublishButton = (props) => {
  return (
    <button className={classes.click_button} onClick={() => props.onClick()}>
      公開状態： {props.isPublished.toString()}
    </button>
  );
};

export default PublishButton;
