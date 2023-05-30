import Cuenta from "./pages/Cuenta"
import Inicio from "./pages/Inicio"
import Productos from "./pages/Productos"
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <>

      <Navbar />
      
        <Routes>
          <Route index path="/" element={<Inicio />} />
          <Route path="/Cuenta" element={<Cuenta />} />
          <Route path="/Productos" element={<Productos />} />
        </Routes>
     
    </>
  )
}
export default App