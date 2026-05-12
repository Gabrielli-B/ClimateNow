import iconClimateNow from "../assets/icon_climateNow.png";
import "./Register.css";
import { Link } from "react-router-dom";

export function Register() {
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
            <Link to="/login">
                    <button className="btn-login">Entrar</button>
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
            <h1>Bem-vindo!</h1>
            <p>Crie sua conta para continuar</p>

            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </section>
  </div>
  );
}