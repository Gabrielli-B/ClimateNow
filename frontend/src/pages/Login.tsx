import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import iconClimateNow from "../assets/icon_climateNow.png";
import "./Login.css"

export function Login() {
  const { login } = useAuth();

  const navigate = useNavigate();

  function handleLogin() {
    login();

    navigate("/dashboard");
  }

  return (
    
    <div className="container-register">
    
    <section className="register-card">
      
      <header>

        <div className="logo-text">
          <img src={iconClimateNow} alt="Logo ClimateNow" />
          <h1>Climate</h1>
          <h1 className="titleColor">Now</h1>
        </div>
        
        <nav>
            <a href="#">Sobre</a>
            <a href="#">Recursos</a>
            <a href="#">Contato</a>
            <Link to="/register">
                    <button className="btn-signUp">Cadastrar-se</button>
            </Link>
        </nav>

      </header>

      <div className="content-register">
        
        <div className="left-side">
          <h2>
            Informação que <br/>
            transforma o <span>amanhã</span>
          </h2>

          <p>
            Acompanhe o clima em tempo real, receba alertas
              e ajude a construir um futuro mais consciente.
          </p>
        </div>

        <div className="right-side">
          <form>
            <h1>Bem-vindo de volta!</h1>
            <p>Faça Login para continuar</p>

            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button onClick={handleLogin}>Entrar</button>
          </form>
        </div>
      </div>
    </section>
  </div>
  );
}
