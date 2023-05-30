
import tenis2 from "../assets/tenis2.jpg";
import { Button } from "../components/Button";
export const Inicio = () => {



    //funcion1
    const Saludar = () => {
        console.log("ola los saludo")
    }
    //funcion 2
    function Platicar() {
        return console.log("Pasa chismesito")
    }
    return (
        <>
            

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
                            <Button texto={"Comprar"} color={"dark"} click={Saludar} />
                        </div>
                    </div>

                    <div className="card c2">

                        <div className="info">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <h4>Nike</h4>
                            <Button texto={"Comprar"} color={"light"} click={Platicar} />

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Inicio;