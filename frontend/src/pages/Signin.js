import React from "react";
import { useState } from "react";

function Signin({ user }) {

    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");
    const [password, setPassword] = useState(user ? user.password : "");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password);
        setName("");
        setEmail("");
        setPassword("");
    };

    return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Nome</label>
            <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
            />
        </div>
        <div>
            <label htmlFor="name">E-mail</label>
            <input
            type="email"
            name="email"
            placeholder="Digite o seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
        </div>
        <div>
            <label htmlFor="name">Senha</label>
            <input
            type="password"
            name="password"
            placeholder="Digite a sua senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />
        </div>
        <input type="submit" value="Criar usuário" />
        </form>
    </div>
    );
};

export default Signin;