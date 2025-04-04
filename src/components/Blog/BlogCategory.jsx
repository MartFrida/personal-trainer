/* eslint-disable react/prop-types */
import { useState } from "react";
import SectionRegular from "../SectionRegular";
import { theme } from "../../helpers/theme";
import Article from "./Article";
import { useTranslation } from "react-i18next";

const BlogCategory = ({ category }) => {
  const { t } = useTranslation();
  const [isCutDescription, setIsCutDescription] = useState(true)
  return (
    <SectionRegular key={category.label} id={category.label} >
      <h3 className={`${theme.primary} text-2xl p-4 rounded-lg hover:scale-101 transition duration-300`}>{category.label}</h3>
      <p className="leading-relaxed tracking-wide text-gray-700 text-xl my-4">{category.description}</p>
      {!isCutDescription && <Article />}
      <div className='flex justify-end w-full mt-4 md:mt-0'>
        {isCutDescription ?
          <button onClick={() => setIsCutDescription(false)} className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white">
            {t("leermas")}
          </button> :
          <button onClick={() => setIsCutDescription(true)} className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white" >{t("leermeno")}
          </button>
        }
      </div>

    </SectionRegular>
  );
};
export default BlogCategory
