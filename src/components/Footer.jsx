import { theme } from "../helpers/theme";

const Footer = () => {

  return (
    <footer className={`${theme.primary} p-4 text-white flex justify-around`}>
      <div className="container mx-auto text-center w-full">
        <p>&copy; Copyright Entrenador Personal Barcelona   |   All Rights Reserved           </p>
      </div>
    </footer>
  )
}

export default Footer