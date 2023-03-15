import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useOutletContext } from "react-router-dom";

export default function Specification() {
    const products = useOutletContext()
    const [count, setCount] = useState(0)
    
    const chosenSet = products.sets.filter(set => set.isChosen)[0]

    useEffect(() => {
        setCount(0)
    }, [products])

    function handlePrev() {
        if(count > 0)
        setCount(count -1)
        else
        setCount(chosenSet.productsIds.length - 1)
    }

    function handleNext() {
        if(count < chosenSet.productsIds.length - 1)
        setCount(count + 1)
        else if (count === chosenSet.productsIds.length - 1)
        setCount(0)
    }

    const productData = products.knives.find(knife => knife.id === chosenSet.productsIds[count]?.toString()) || products.knives[0]
    console.log(productData)

    return (
        <div className="specification-container">
            <nav>
                <p onClick={()=>handlePrev()}>prev</p>
                <p>{count}</p>
                <p onClick={()=>handleNext()}> next</p>

            </nav>
            <div className="specification-img"> 
                <img src={products.knives[count].image} />
            </div>
            <div className="specification-row">
                <p>Blade Length:</p>
                <p>{productData.bladeLength}cm</p>
            </div>
        </div>
    )
}