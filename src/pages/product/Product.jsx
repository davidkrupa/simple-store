import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import image from "../../images/set-of-3.jpg"
import image2 from "../../images/set-of-5.jpg"
import image3 from "../../images/knife-chopping-2.jpg"

export default function Product() {

    const [isFirstChosen, setIsFirstChosen] = useState(true)

    const chosen = {
        backgroundColor: "#24242C",
        color: "#D8D8D8"         
    }
    const unchosen = {
        backgroundColor: "transparent",
        color: "#24242C"          
    }
    const active = {
        color: "#24242C",
        textDecoration: "underline"
    }

    return (
        <div className="product-page-container">
            <img src={isFirstChosen ? image : image2} />
            <h1 className="product-title">Katana knives - {isFirstChosen ? "3" : "5"}pcs</h1>
            <p className="price">${isFirstChosen ? "49.99" : "69.99"}</p>
            <div className="options-container">
                <p 
                    onClick={() => setIsFirstChosen(true)} 
                    style={isFirstChosen ? chosen : unchosen}>
                    set of 3
                </p>
                <p 
                    onClick={() => setIsFirstChosen(false)} 
                    style={!isFirstChosen ? chosen : unchosen}>
                    set of 5
                </p>
            </div>
            <button>Buy now</button>
            <nav>
                <NavLink 
                    to="details" 
                    style={({isActive}) => isActive ? active : null}>
                    Details
                </NavLink>
                <NavLink 
                    to="shipping-info" 
                    style={({isActive}) => isActive ? active : null}>
                    Shipping
                </NavLink>
                <NavLink 
                    to="specification" 
                    style={({isActive}) => isActive ? active : null}>
                    Specification
                </NavLink>
            </nav>
            <Outlet />
            <img src={image3} />
        </div>

    )
}