import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import './style.css';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        alert('funcionou');
    }

    return (
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo} alt="Logo Sistema de Login" />
                </div>

                <form onSubmit={handleSubmit}>
                    <h2>Entrar</h2>
                    <input type="text" placeholder="E-mail" 
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="password" placeholder="Senha" 
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Acessar</button>
                </form>

                <Link to="/register">Criar uma conta</Link>
            </div>
        </div>
    )
}

export default SignIn;