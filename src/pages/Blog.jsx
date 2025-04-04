import { useEffect, useState } from "react";
import ContainerMain from "../components/ContainerMain";

import SectionRegular from "../components/SectionRegular";
import { theme } from "../helpers/theme";
import { useTranslation } from "react-i18next";
import Article from "../components/Blog/Article";

export const Blog = () => {
  const { t, i18n } = useTranslation();
  const heroData = t('blog/topics:entrenamiento', { returnObjects: true })

  console.log(heroData)

  const [categoriesBlog, setcategoriesBlog] = useState({});

  // Динамическая загрузка JSON при смене языка
  useEffect(() => {
    const loadData = async () => {
      try {
        const [blog] = await Promise.all([
          fetch(`/locales/${i18n.language}/blog/topics.json`).then(res => res.json()),
        ]);
        setcategoriesBlog(blog)
      } catch (error) {
        console.error("Ошибка загрузки данных:", error);
      }
    };

    loadData();
  }, [i18n.language]); // Перезагружаем при смене языка

  const createLinks = (data) => {
    if (!data) return []; // Проверка на null или undefined
    return Object.keys(data)
      .map(key => data[key]?.label ? { path: `#${key}`, label: data[key].label, description: data[key].description } : null)
      .filter(Boolean);
  };

  const listBlog = createLinks(categoriesBlog)
  console.log(listBlog)

  return (
    <ContainerMain
      className={`${theme.background} ${theme.text} p-8 mt-20 flex justify-center flex-col overflow-auto scroll-smooth w-full`}
    >

      {listBlog?.map((category, index) => (
        <SectionRegular key={index} id={index} >
          <h3 className="text-black">{category.label}</h3>
          <p className="text-black">{category.description}</p>
          <Article />
        </SectionRegular>
      ))}
    </ContainerMain>
  );
};
