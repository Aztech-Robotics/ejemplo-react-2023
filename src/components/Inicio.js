import carrito from "../assets/carrito.png";
import nikelogo from "../assets/nikelogo.webp";
import tenis2 from "../assets/tenis2.jpg";
import jordan from "../assets/jordan.png";
export const Inicio = () => {
    return (
        <>
            <div className="navbar-jordan">
                <img className="jordan-icon" src={jordan} alt="" />
                <ul className="list-jordan">
                    <li>
                        <div className="linea-container">
                            <div className="text">

                                Buscar Tienda
                            </div>
                            <div className="line">|</div>
                        </div>

                    </li>
                    <li>
                        <div className="linea-container">
                            <div className="text">
                                Ayuda
                            </div>

                            <div className="line">|</div>
                        </div>
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
                <img className="nike-icon" src={nikelogo} alt="" />
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

            <div className="landing-frame-1">
                <div className="container">
                    <img src={tenis2} alt="" />
                </div>
                <div className="description">
                    <h1>MOVERTE PARA FLORECER</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto molestias, porro nobis pariatur modi
                        voluptatem deserunt aspernatur numquam. Error quod tempora delectus magni provident, aperiam dolorem
                        doloremque rerum numquam esse?.</p>
                </div>
                <button className="btn dark">Comprar</button>
            </div>

            <div className="landing-frame-2">
                <div className="cards">
                    <div className="card c1">

                        <div className="info">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <h4>Nike AGC</h4>
                            <button className="btn light">Comprar</button>
                        </div>
                    </div>

                    <div className="card c2">

                        <div className="info">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <h4>Nike</h4>
                            <button className="btn light">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Inicio;