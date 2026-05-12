import iconClimateNow from "../assets/icon_climateNow.png";

export function Register() {
  return (

    <div className="container-register">
    
    <section className="register-card">

        <img src={iconClimateNow} alt="Logo ClimateNow" />
        <h1>Climate</h1>
        <h1>Now</h1>

        <nav>
            <a href="#">Sobre</a>
            <a href="#">Recursos</a>
            <a href="#">Contato</a>
            <a href="#">Cadastrar</a>
        </nav>


        <form action="">
            <h1>Bem-vindo!</h1>
            <p>Crie sua conta para continuar</p>

        <input type="text" placeholder="Nome" />

        <input type="email" placeholder="Email" />

        <input type="password" placeholder="Senha" />

        <button type="submit">Cadastrar</button>

        </form>

      </section>
    </div>
  );
}