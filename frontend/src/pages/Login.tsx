import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Login() {
  const { login } = useAuth();

  const navigate = useNavigate();

  function handleLogin() {
    login();

    navigate("/dashboard");
  }

  return (
    <div>
      <h1>Login</h1>

      <input type="email" placeholder="Digite seu email" />

      <input type="password" placeholder="Digite sua senha" />

      <button onClick={handleLogin}>
        Entrar
      </button>
    </div>
  );
}