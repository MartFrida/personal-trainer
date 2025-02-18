/* eslint-disable react/prop-types */
import { theme } from "../helpers/theme"

const SectionRegular = ({ id, children }) => {
  return (
    <div id={id} className={`bg-white p-6 rounded-lg ${theme.shadow2xl} my-4 scroll-mt-24`}>
      {children}
    </div>
  )
}

export default SectionRegular