import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import descriptionImage1 from "../../images/description-image-1.jpg"
import descriptionImage2 from "../../images/description-image-2.jpg"
import descriptionImage3 from "../../images/description-image-3.jpg"
import stars from "../../images/stars.png"
import { productsData } from "../../data/data"
import { reviews } from "../../data/reviews"


export default function Product() {    
    const [allVariants, setAllVariants] = useState(productsData)
    const [chosenVariant, setChosenVariant] = useState(productsData.sets[0])
    const [customerReviews, setCustomerReviews] = useState(reviews)
    const [count, setCount] = useState(0)
    const navigate = useNavigate()

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
        console.log("buy button clicked")
        navigate("/checkout")
    }

    function handleReviewChange(id) {
        if(id === "next") {
            if(count !== customerReviews.length -1) {
                setCount(count + 1)
            }
            else setCount(0)
        }
        else if(id === "prev") {
            if(count !== 0) {
                setCount(count -1)
            }
            else setCount(customerReviews.length - 1)
        }
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
            <div className="offer-presentation" key={set.id} onClick={() => handleBuyClick()}>
                <img src={set.image}/>                   
                <ul>
                    {knifeNames}
                </ul>
                <p className="offer-presentation-price">${set.price}</p>
                <p className="offer-presentation-cta">Buy now</p>
            </div>
        )
    })

    return (
        <div className="product-page-container">

            <section className="product-first-section">
                <img src={image} className="product-main-image"/>
                <div className="product-main-details">
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
                    <p className="shipping-note"><i className="fa-solid fa-truck-fast"></i> Free shipping, delivery in 5 days! </p>
                    <hr></hr>
                    <nav>
                        <NavLink 
                            to="."
                            end
                            style={({isActive}) => isActive ? active : null}
                        >
                            Description
                        </NavLink>
                        <NavLink 
                            to="specification" 
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
                    </nav>
                    <Outlet context={{allVariants, chosenVariant}}/>
                </div>
            </section>

            <section className="description-section">
                <img src={descriptionImage1} className="product-description-image"/>
                <div className="description-box">
                    <h2>Solid construction</h2>
                    <p>Japanese kitchen knives are known for their solid construction, which is achieved through the use of high-quality materials and traditional forging techniques. The blades are made of high-carbon or steel, and are carefully crafted to ensure sharpness, durability, and precision cutting.</p>
                </div>
            </section>

            <section className="description-section reverse">
                <img src={descriptionImage2} className="product-description-image"/>
                <div className="description-box reverse-box">
                    <h2>For chefs and home cooks</h2>
                    <p>We take pride in offering high-quality kitchen knives that are both functional and stylish. Katana knives allow for more precise slicing, dicing, and chopping. Our knives are perfect for both professional chefs and home cooks who are looking for reliable and long-lasting tools in the kitchen.</p>
                </div>
            </section>

            <section className="description-section">
                <img src={descriptionImage3} className="product-description-image"/>
                <div className="description-box">
                    <h2>Ergonomic design</h2>
                    <p>Ergonomic design is a key feature of Katana kitchen knives, with the handles and blades designed to fit comfortably in the user's hand. The balance of the knife is carefully considered, with the weight distributed evenly along the blade and handle. This design ensures that the knife feels balanced and stable.</p>
                </div>
            </section>

            <section className="offer-section">
                <h2>Choose Best Offer for You</h2>
                <div className="offer-container">
                    {offers}
                </div>
            </section>

            <section className="review-section">
                <h2>Reviews</h2>
                <div className="review-section-container">
                    <button onClick={() => handleReviewChange("prev")}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <div className="review-container">
                        <img src={customerReviews[count].image} className="review-image" />
                        <div className="review-body">
                            <div className="review-name-container"> 
                                <h4>{customerReviews[count].name}</h4>
                                <img src={stars} className="review-stars" />
                            </div>
                            <p>{customerReviews[count].body}</p>
                        </div>
                    </div>
                    <button onClick={() => handleReviewChange("next")}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </section>

        </div>
    )
}