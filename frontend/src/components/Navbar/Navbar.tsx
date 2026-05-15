import"./Navbar.css";
import iconClimateNow from "../../assets/icon_climateNow.png";
import { Link } from "react-router-dom";

export function Navbar(){
    return(
        <header className="navbar"> 

            <div className="title">
                <img src={iconClimateNow} alt="Logo ClimateNow" />
                <h1>Climate</h1>
                <h1 className="titleColor">Now</h1>
            </div>

            <nav>
                <a href="#">Sobre</a>
                <a href="#">Recursos</a>
                <a href="#">Contato</a>

                <Link to="/login" className="btn-login">
                    Entrar
                </Link>

                 <Link to="/register" className="btn-signUp">
                    Cadastrar-se     
                 </Link>
        
            </nav>
        </header>
    );
}