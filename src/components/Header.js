import React from "react";
import { NavLink } from 'react-router-dom';

export default function Header () {
    return (
        <div className="header">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/myprofile">My Profile</NavLink>
            <NavLink to="/messages">Messages</NavLink>
        </div>
  )
}