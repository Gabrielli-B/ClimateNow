
export function Navbar(){
    return(
        <header className="navbar"> 
            <h1 className="logoHome">ClimateNow</h1>

            <nav>
                <a href="#">Sobre</a>
                <a href="#">Recursos</a>
                <a href="#">Contato</a>
            </nav>

            <button className="btn-login">
                entrar
            </button>
        </header>
    );
}