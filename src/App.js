import Cuenta from "./components/Cuenta"
import Inicio from "./components/Inicio"
import Productos from "./components/Productos"
import "./index.css"
export const App = () => {
  return (
    <>
      <Inicio />
      <Productos />
      <Cuenta />
    </>
  )
}
export default App