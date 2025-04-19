/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { theme } from "../../helpers/theme";

const ArticlePreview = ({ id, title, content, categoryPath }) => {
  // Получим первые 200 символов контента без Markdown
  const shortText = content
    .replace(/[#_*`>\-[\]()]/g, "") // удалим markdown
    .substring(0, 200) + "...";

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
      <h4 className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600 mb-4">{shortText}</p>
      <Link
        to={`/blog/${categoryPath}/${id}`}
        className={`${theme.buttonmy} px-4 py-2 rounded`}
      >
        Leer artículo completo →
      </Link>
    </div>
  );
};

export default ArticlePreview;
