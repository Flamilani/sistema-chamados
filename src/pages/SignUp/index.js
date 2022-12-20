import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import { AuthContext } from "../../contexts/auth";
import './style.css';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signUp } = useContext(AuthContext);

    function handleSubmit(e) {
        e.preventDefault();
        
        if (name !== '' && email !== '' && password !== '') {
            signUp(name, email, password);
        }
    }

    return (
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo} alt="Logo Sistema de Login" />
                </div>

                <form onSubmit={handleSubmit}>
                    <h2>Cadastrar</h2>
                    <input type="text" placeholder="Nome Completo" 
                    value={name} onChange={(e) => setName(e.target.value)}
                    />
                    <input type="text" placeholder="E-mail" 
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="password" placeholder="Senha" 
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Cadastrar</button>
                </form>

                <Link to="/">Possui uma conta? Clique aqui</Link>
            </div>
        </div>
    )
}

export default SignUp;