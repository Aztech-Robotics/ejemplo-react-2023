//props = parametros
export const Button = ({ color, texto, click }) => {
    return <button className={`btn ${color}`} onClick={click}>{texto}</button>
}