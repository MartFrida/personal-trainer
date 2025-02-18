/* eslint-disable react/prop-types */
import { theme } from "../helpers/theme"

const ContainerMain = ({ children }) => {
  return (
    <div className={`${theme.background} px-8  flex justify-center flex-col overflow-auto scroll-smooth`}>
      <div className="h-20"></div>
      {children}</div>
  )
}


export default ContainerMain