import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import image_chopping from "../../images/knife-chopping-2.jpg"
import { productsData } from "../../data/data"

export default function Product() {    
    const [allVariants, setAllVariants] = useState(productsData)
    const [chosenVariant, setChosenVariant] = useState(productsData.sets[0])

    const chosenStyle = {
        backgroundColor: "#24242C",
        color: "#D8D8D8"         
    }
    const unchosenStyle = {
        backgroundColor: "transparent",
        color: "#24242C"          
    }
    const active = {
        color: "#24242C",
        textDecoration: "underline"
    }

    
    function changeVariant(id) {
        setAllVariants(prev => {            
            const sets = prev.sets.map(set => {
                if (set.id === id) {
                    return {...set, isChosen: true}
                }
                else return {...set, isChosen: false}
            })
            return {...prev, sets: sets}
        })
    }
    
    useEffect(() => {
        setChosenVariant(allVariants.sets.filter(set => set.isChosen === true)[0])
    }, [allVariants])

    const {image, price, productsIds, isChosen} = chosenVariant

    const variantsButtons = allVariants.sets.map(set => {
        return (
            <button 
                onClick={() => changeVariant(set.id)} 
                style={set.isChosen ? chosenStyle : unchosenStyle}
                key={set.id}
            >
                {set.name}
            </button>
        )
    })

    return (
        <div className="product-page-container">
            <img src={image} className="product-main-image"/>
            <h1 className="product-title">Katana knives - {productsIds.length}pcs</h1>
            <p className="price">${price}</p>
            <div className="options-container">
                {variantsButtons}
            </div>
            <button className="buy-button">Buy now</button>
            <nav>
                <NavLink 
                    to="details" 
                    style={({isActive}) => isActive ? active : null}
                >
                    Details
                </NavLink>
                <NavLink 
                    to="shipping-info" 
                    style={({isActive}) => isActive ? active : null}
                >
                    Shipping
                </NavLink>
                <NavLink 
                    to="specification" 
                    style={({isActive}) => isActive ? active : null}
                >
                    Specification
                </NavLink>
            </nav>
            <Outlet context={allVariants}/>
            <section>
                <img src={image_chopping} className="product-description-image"/>
            </section>
        </div>

    )
}