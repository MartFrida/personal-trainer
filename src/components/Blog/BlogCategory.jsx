import { Link, useParams } from "react-router-dom";
import articles from "../../data/articles";

const BlogCategory = () => {
  const { category } = useParams();
  const categoryArticles = articles[category];

  if (!categoryArticles) return <div className="text-center text-red-500">Категория не найдена</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 capitalize">{category}</h1>
      <ul>
        {categoryArticles.map((article) => (
          <li key={article.id} className="mb-2">
            <Link to={`/blog/${category}/${article.id}`} className="text-blue-500 hover:underline">
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogCategory;
