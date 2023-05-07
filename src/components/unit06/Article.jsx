import { useState } from "react";
import { Title, Content, PublishButton } from "./index";

export const Article = (props) => {
  const [isPublished, setIsPublished] = useState(false);
  // console.log().clear;
  console.log(isPublished);

  const publishArticle = () => {
    setIsPublished(true);
  };

  return (
    <article>
      <Title title={props.title} />
      <Content content={props.content} />
      <PublishButton isPublished={isPublished} onClick={publishArticle} />
    </article>
  );
};
