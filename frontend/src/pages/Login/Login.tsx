import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Login.css"
import { AuthLayout } from "../../layouts/AuthLayout/AuthLayout";
import { useState } from "react";

export function Login() {
  const { login } = useAuth();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event: React.FormEvent) {
    event.preventDefault();

    const success = login(email, password);

    if (success) {
      navigate("/dashboard");

      return;
    }

    alert("Email ou senha inválidos");
  }

  return (
    <AuthLayout>
      <form onSubmit={handleLogin}>
        <h1>Bem-vindo de volta!</h1>
        <p>Faça Login para continuar</p>

        <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>

        <input type="password" placeholder="Senha" onChange={(e)=> setPassword(e.target.value)} />
        
        <button className="btn-login" onClick={handleLogin}>Entrar</button>
      </form>
    </AuthLayout>
        
  );
}
