import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import image_chopping from "../../images/knife-chopping-2.jpg"
import { productsData } from "../../data/data"
import { nanoid } from 'nanoid'

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

    function handleBuyClick() {
        console.log("product added to cart")
    }
    
    useEffect(() => {
        setChosenVariant(allVariants.sets.filter(set => set.isChosen === true)[0])
    }, [allVariants])

    const {image, price, productsIds} = chosenVariant

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

    const offers = allVariants.sets.map((set) => {
        const knifeNames = set.productsIds.map(id => {
            const knifeName = allVariants.knives.find(el => el.id === id.toString())
            return (
                <li key={knifeName.id}>{knifeName.name}</li>
            )
            
        })
        return (
            <div key={set.id}>
                <div className="offer-presentation">
                    <img src={set.image}/>
                    <div className="offer-presentation-info" onClick={() => handleBuyClick()}>                        
                        <ul>
                            {knifeNames}
                        </ul>
                        <p className="offer-presentation-cta">Buy now</p>
                    </div>
                </div>
                <p className="offer-presentation-price">${set.price}</p>
            </div>

        )
    })

    return (
        <div className="product-page-container">

            <section className="product-first-section">
                <img src={image} className="product-main-image"/>
                <h1 className="product-title">Katana knives - {productsIds.length}pcs</h1>
                <p className="price">${price}</p>
                <div className="options-container">
                    {variantsButtons}
                </div>
                <button 
                    className="buy-button" 
                    onClick={() => handleBuyClick()}>
                        Buy now
                </button>
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
                <Outlet context={{allVariants, chosenVariant}}/>
            </section>

            <section>
                <img src={image_chopping} className="product-description-image"/>
                <h2>Solid construction</h2>
                <p>Our knives have solid construction tested many times in hard conditions. They passed every test and now they are ready to be used in your kitchen too!</p>
            </section>

            <section>
                <img src={image_chopping} className="product-description-image"/>
                <h2>Solid construction</h2>
                <p>Our knives have solid construction tested many times in hard conditions. They passed every test and now they are ready to be used in your kitchen too!</p>
            </section>

            <section className="offer-container">
                <span><i className="fa-solid fa-chevron-left"></i></span>
                <div>
                    {offers}
                </div>
                <span><i className="fa-solid fa-chevron-right"></i></span>
            </section>

        </div>
    )
}