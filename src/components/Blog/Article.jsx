/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import articles from "../../data/articles";

const Article = () => {
  const { category, id } = useParams();
  const article = articles[category]?.find((a) => a.id === id);

  if (!article) return <div className="text-center text-red-500 ">Статья не найдена</div>;

  return (<div className="max-w-2xl mx-auto p-4 mt-20">
    <title className="text-3xl font-bold mb-4 mt-20">{article.title}</title>

    <ReactMarkdown className="prose">{article.content}</ReactMarkdown>
  </div>)
};

export default Article;
