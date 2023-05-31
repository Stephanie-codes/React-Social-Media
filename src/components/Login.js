import React, {useState} from "react";
import { NavLink } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <main id='form1'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label for="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" 
                placeholder="youremail@gmail.com" id="email" name="email" />
                <label for="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" 
                placeholder="*********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button>Don't have an account? <NavLink to="/signup">Sign up here</NavLink></button>
        </main>
    )
}