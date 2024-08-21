import Navbar from "./components/modules/Navbar/Navbar"
import { useRoutes } from "react-router-dom"
import routes from "./routes"
import MenuBar from "./components/modules/MenuBar/MenuBar"

function App() {
  const router = useRoutes(routes)
  return (
    <>
      <Navbar/>
      {router}
      <MenuBar/>
    </>
  )
}

export default App