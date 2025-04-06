/* eslint-disable react/prop-types */
import ReactMarkdown from 'react-markdown';
import { theme } from "../../helpers/theme"
import rehypeRaw from 'rehype-raw'  // Добавляем rehype-raw для рендеринга HTML

const Article = ({ title, content }) => {

  // Функция для вставки изображения в контент
  const renderImage = (content) => {
    // Используем регулярное выражение для поиска маркера #image: и замены его на тег <img>
    const imageRegex = /#image:\s*(https?:\/\/[^\s]+)\s*"([^"]+)"/g;

    // Заменяем маркер на тег <img> с соответствующим URL
    return content.replace(imageRegex, (match, url, altText) => {
      return `<img src="${url}" alt="${altText}" class="inline-block max-w-xs float-left mr-4 my-2 rounded-lg"/>`;
    });
  };

  // Подготовка контента для рендеринга
  const transformedContent = renderImage(content);

  return (
    <div className={`${theme.text} relative text-xl flex flex-col gap-2`}>
      <h2 className="text-4xl p-4 rounded-lg">
        {title}
      </h2>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}  // Подключаем rehypeRaw для рендеринга HTML
        components={{
          p: ({ ...props }) => <p className="prose" {...props} />,
        }}
      >
        {transformedContent}
      </ReactMarkdown>
    </div>
  );
};

export default Article;
