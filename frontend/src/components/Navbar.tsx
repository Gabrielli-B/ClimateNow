import"./Navbar.css";
import iconClimateNow from "../assets/icon_climateNow.png";

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
                <button className="btn-login">Entrar</button>
                <button className="btn-signUp">Cadastrar-se</button>
            </nav>
        </header>
    );
}