import { Outlet } from "react-router-dom"
import Navber from "./Components/Navber/Navber"
import Footer from "./Components/Footer/Footer"

function App() {

  return (
    <>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
