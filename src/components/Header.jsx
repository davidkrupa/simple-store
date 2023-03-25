import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {

    const activeStyle = {
        color: "#588544",
        textDecoration: "underline"
    }

    return (
        <header>
            <div className="nav-container">
                <Link to='/'>#Katana</Link>
                <nav>
                    <NavLink 
                        to='contact' 
                        style={({isActive}) => isActive ? activeStyle : null}>
                        Contact
                    </NavLink>
                    <NavLink 
                        to='about' 
                        style={({isActive}) => isActive ? activeStyle : null}>
                        About Us
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}