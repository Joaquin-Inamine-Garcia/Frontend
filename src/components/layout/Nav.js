import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div className="Holder">
                <ul>
                    <li><Link to="/">HomePage</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/servicios">Servicios</Link></li>
                    <li><Link to="/cuidado-del-coche">Cuidado Del Coche</Link></li>
                    <li><Link to="/galeria">Galeria</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav;