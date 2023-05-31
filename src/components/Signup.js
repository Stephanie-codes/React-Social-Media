import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <main id='form1'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name} name="name" id="name" placeholder="full name" />
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" 
                placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" 
                placeholder="*********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button>Already have an account? <NavLink to="/login">Login here</NavLink></button>
        </main>
    )
}