import { Navbar } from "../../components/Navbar/Navbar";
import "./AuthLayout.css";

type AuthLayoutProps = {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps){
  return(

    <div className="container-register">

      <section className="register-card">

        <Navbar />

        <div className="content-register">

          <div className="left-side">

            <h2>
              Informação que <br />
              transforma o <span>amanhã</span>
            </h2>

            <p>
              Acompanhe o clima em tempo real,
              receba alertas e ajude a construir
              um futuro mais consciente.
            </p>

          </div>

          <div className="right-side">

            {children}

          </div>

        </div>

      </section>

    </div>

  );
}