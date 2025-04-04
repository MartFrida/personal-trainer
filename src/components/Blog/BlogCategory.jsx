import { Link, useParams } from "react-router-dom";
import articles from "../../data/articles";
import ContainerMain from "../ContainerMain";
import { theme } from "../../helpers/theme";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import i18n from "../../i18n";

const BlogCategory = () => {
  const { category } = useParams();

  const categoryArticles = articles[category];
  const { t } = useTranslation();

  useEffect(() => {
    i18n.loadNamespaces([`blog/${category}`]); // Загружаем из папки /blog/
  }, [category, i18n]);

  if (!categoryArticles) return <div className="text-center text-red-500">Categoría no encontrada</div>;

  return (
    <ContainerMain
      className={`${theme.background} ${theme.text} p-8 mt-20 flex justify-center flex-col overflow-auto scroll-smooth w-full`}
    >
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 capitalize">{t("title", { ns: `blog/${category}` })}</h1>
        <ul>
          {categoryArticles.map((article) => (
            <li key={article.id} className="mt-20">
              <Link to={`/blog/${category}/${article.id}`} className="text-blue-500 hover:underline">
                {article.title}
              </Link>

            </li>
          ))}
        </ul>
      </div>
    </ContainerMain>
  );
};

export default BlogCategory;
