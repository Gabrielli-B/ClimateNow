import"./Navbar.css";
import logo from "../assets/icone_clima_sol_nuvem.png";

export function Navbar(){
    return(
        <header className="navbar"> 

            <div className="title">
                <img src={logo} alt="Logo ClimateNow" />
                <h1>Climate</h1>
                <h1 className="titleColor">Now</h1>
            </div>

            <nav>
                <a href="#">Sobre</a>
                <a href="#">Recursos</a>
                <a href="#">Contato</a>
                <button className="btn-login">entrar</button>
            </nav>
        </header>
    );
}