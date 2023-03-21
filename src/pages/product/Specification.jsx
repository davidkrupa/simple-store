import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Specification() {
    const { allVariants, chosenVariant } = useOutletContext()
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(0)
    }, [allVariants])

    function handlePrev() {
        if(count > 0)
        setCount(count -1)
        else
        setCount(chosenVariant.productsIds.length - 1)
    }

    function handleNext() {
        if(count < chosenVariant.productsIds.length - 1)
        setCount(count + 1)
        else if (count === chosenVariant.productsIds.length - 1)
        setCount(0)
    }

    const productData = allVariants.knives
        .find(knife => knife.id === chosenVariant.productsIds[count].toString()) || products.knives[0]

    const { 
        image,
        name,
        bladeLength,
        handleLength,
        width,
        tickness,
        weight 
    } = productData

    return (
        <div className="specification-container">
            <div className="specification-menu"> 
                <button onClick={()=>handlePrev()}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                    <p>{name}</p>
                <button onClick={()=>handleNext()}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
            <div className="specification-image-container"> 
                <img src={image} className="specification-image" />
            </div>
            <div className="specification-row">
                <p>Blade Length:</p>
                <p>{bladeLength}cm</p>
            </div>
            <div className="specification-row">
                <p>Handle Length:</p>
                <p>{handleLength}cm</p>
            </div>
            <div className="specification-row">
                <p>Width:</p>
                <p>{width}cm</p>
            </div>
            <div className="specification-row">
                <p>Tickness:</p>
                <p>{tickness}mm</p>
            </div>
            <div className="specification-row">
                <p>Weight:</p>
                <p>{weight}g</p>
            </div>
        </div>
    )
}