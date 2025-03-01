/* eslint-disable react/prop-types */
import { theme } from "../helpers/theme"

const ContainerMain = ({ children }) => {
  return (
    <div className={`${theme.background} px-2 md:px-8 min-h-screen flex justify-center flex-col overflow-auto scroll-smooth bg-fixed bg-cover gap-y-4 bg-repeat container m-auto pb-8`} style={{ backgroundImage: "url('/img/grunge-wall-texture.jpg')" }}>
      <div className="h-18 md:h-24 "></div>
      {children}</div>
  )
}


export default ContainerMain