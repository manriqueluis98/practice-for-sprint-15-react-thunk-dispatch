import { useParams } from "react-router-dom";
import "./SingleArticle.css";
import { useEffect, useState } from "react";

const SingleArticle = ({ articles }) => {
  const { id } = useParams();
  console.log(articles);
  const singleArticle = articles.find((article) => article.id == id);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (singleArticle) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [singleArticle]);

  return (
    <>
      {isLoading && <h1>Loading</h1>}
      {!isLoading && (
        <div className="singleArticle">
          <h1>{singleArticle.title}</h1>
          <img src={singleArticle.imageUrl} alt={singleArticle.title} />
          <p>{singleArticle.body}</p>
        </div>
      )}
    </>
  );
};

export default SingleArticle;
