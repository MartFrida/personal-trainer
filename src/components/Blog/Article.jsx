/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import articles from "../../data/articles";
import ContainerMain from "../ContainerMain";
import { theme } from "../../helpers/theme";

const Article = () => {
  const { category, id } = useParams();
  const article = articles[category]?.find((a) => a.id === id);

  if (!article) return <div className="text-center text-red-500 ">Estamos preparando los artículos, estarán disponible pronto</div>;

  return (
    <ContainerMain
      className={`${theme.background} ${theme.text} p-8 mt-20 flex justify-center flex-col overflow-auto scroll-smooth w-full`}
    >
      <div className="max-w-2xl mx-auto p-4 ">
        <title className="text-3xl font-bold mb-4 mt-20">{article.title}</title>

        <ReactMarkdown
          components={{
            p: ({ ...props }) => <p className="prose" {...props} />,
          }}
        >
          {article.content}
        </ReactMarkdown>
      </div>
    </ContainerMain>)
};

export default Article;
