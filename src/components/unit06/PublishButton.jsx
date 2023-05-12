import "./PublishButton.css";

const PublishButton = (props) => {
  return (
    <button className="click-button" onClick={() => props.onClick()}>
      公開状態： {props.isPublished.toString()}
    </button>
  );
};

export default PublishButton;
