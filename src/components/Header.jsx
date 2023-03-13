import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {

    const activeStyle = {
        color: "#588544",
        textDecoration: "underline"
    }

    return (
        <header>
            <Link to='/'>#Funnel</Link>
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
                <NavLink 
                    to='shipping' 
                    style={({isActive}) => isActive ? activeStyle : null}>
                    Shipping
                </NavLink>
            </nav>
        </header>
    )
}