/* eslint-disable react/prop-types */
import ReactMarkdown from 'react-markdown';
import { theme } from "../../helpers/theme"
import rehypeRaw from 'rehype-raw'  // Добавляем rehype-raw для рендеринга HTML
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Article = () => {
  const { category, id } = useParams();
  const ns = `blog/${category}`;
  const { t, i18n } = useTranslation(ns);

  useEffect(() => {
    i18n.loadNamespaces(ns); // загружаем нужный JSON
  }, [ns, i18n]);

  const article = t(`articles.${id}`, { returnObjects: true });

  // Если статья не найдена (вернётся строка, а не объект)
  if (typeof article !== "object" || !article.title) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-red-600">Artículo no encontrado</h2>
        <p className="mt-4 text-gray-500">Verifica que el enlace sea correcto.</p>
      </div>
    );
  }

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
  const transformedContent = renderImage(article.content);

  return (
    <div className={`${theme.text} relative text-xl flex flex-col gap-2`}>
      <h2 className="text-4xl p-4 rounded-lg">
        {article.title}
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
