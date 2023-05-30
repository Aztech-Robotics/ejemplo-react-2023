import carrito from "../assets/carrito.png";
import nikelogo from "../assets/nikelogo.webp";
import jordan from "../assets/jordan.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <div className="navbar-jordan">
                <img className="jordan-icon" src={jordan} alt="" />
                <ul className="list-jordan">
                    <li>
                        <Link to={"/Cuenta"}>
                            <div className="linea-container">
                                <div className="text">

                                    Cuenta
                                </div>
                                <div className="line">|</div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/Productos"} >
                            <div className="linea-container">
                                <div className="text">
                                    Productos
                                </div>

                                <div className="line">|</div>
                            </div>
                        </Link>
                    </li>


                    <li>
                        <div className="linea-container">
                            <div className="text">
                                Unete
                            </div>

                            <div className="line">|</div>
                        </div>
                    </li>

                    <li>
                        <div className="linea-container">
                            <div className="text">

                                Iniciar Sesion
                            </div>
                            <div className="line">|</div>
                        </div>

                    </li>

                </ul>
            </div>
            <div className="navbar">
                <Link to={"/"}>
                    <img className="nike-icon" src={nikelogo} alt="" />
                </Link>
                <ul className="list">
                    <li>Nuevos Lanzamientos</li>
                    <li>Hombre</li>
                    <li>Mujer</li>
                    <li>Niño/a</li>
                    <li>Rebajas</li>
                    <li>SNKRS</li>
                </ul>

                <img className="carrito" src={carrito} alt="" />

            </div>
        </>)
}
