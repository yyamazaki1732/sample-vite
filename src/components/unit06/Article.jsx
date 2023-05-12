import { useState } from "react";
import { Title, Content, PublishButton } from "./index";
import classes from "./Article.module.scss";

export const Article = (props) => {
  const [isPublished, setIsPublished] = useState(false);
  // console.log().clear;
  console.log(isPublished);

  const publishArticle = () => {
    setIsPublished(true);
  };

  return (
    <article>
      <div className={classes.title_wrapper}>
        <Title title={props.title} />
        <Content content={props.content} />
      </div>
      <PublishButton isPublished={isPublished} onClick={publishArticle} />
    </article>
  );
};
