import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../../layouts/AuthLayout/AuthLayout";
import { useAuth } from "../../context/AuthContext";
import "./Register.css"

export function Register() {

  const{ register } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(event: React.FormEvent) {
    event.preventDefault();

    register({
      name,
      email,
      password,
    });

    alert("Cadastro realizado!");
    navigate("/login");
  }
  return (

    <AuthLayout>

      <form onSubmit={handleRegister}>
        <h1>Bem-vindo!</h1>

        <p>Crie sua conta para continuar</p>

        <input type="text" placeholder="Nome" onChange={(e)=>setName(e.target.value)}/>

        <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />

        <input type="password" placeholder="Senha" onChange={(e)=>setPassword(e.target.value)} />

        <button className="btn-singUp" type="submit">Cadastrar</button>

      </form>
    </AuthLayout>
   );
}
