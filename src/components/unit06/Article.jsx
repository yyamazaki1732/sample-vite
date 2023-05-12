import { useState } from "react";
import { Title, Content, PublishButton } from "./index";
import "./Article.css";

export const Article = (props) => {
  const [isPublished, setIsPublished] = useState(false);
  // console.log().clear;
  console.log(isPublished);

  const publishArticle = () => {
    setIsPublished(true);
  };

  return (
    <article>
      <div className="title-wrapper">
        <Title title={props.title} />
        <Content content={props.content} />
      </div>
      <PublishButton isPublished={isPublished} onClick={publishArticle} />
    </article>
  );
};
