import { AuthLayout } from "../../layouts/AuthLayout/AuthLayout";
import "./Register.css";

export function Register() {
  return (

    <AuthLayout>

      <form>
        <h1>Bem-vindo!</h1>
        <p>Crie sua conta para continuar</p>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Cadastrar</button>
        
      </form>
    </AuthLayout>
  );
}