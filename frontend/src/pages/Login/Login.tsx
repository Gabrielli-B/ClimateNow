import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Login.css"
import { AuthLayout } from "../../layouts/AuthLayout/AuthLayout";

export function Login() {
  const { login } = useAuth();

  const navigate = useNavigate();

  function handleLogin() {
    login();

    navigate("/dashboard");
  }

  return (
    <AuthLayout>
      <form>
        <h1>Bem-vindo de volta!</h1>
        <p>Faça Login para continuar</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button className="btn-login" onClick={handleLogin}>Entrar</button>
      </form>
    </AuthLayout>
        
  );
}
