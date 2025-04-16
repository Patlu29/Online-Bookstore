import { Outlet } from "react-router-dom"
import Navbar from "./components/Bars/Navbar"
import './styles/index.css'
function App() {

  return (
    <>
    {<Navbar/  >}
    <main className="main">
    <Outlet />
    </main>
    <footer>footer</footer>
    </>
  )
}

export default App
