import React from "react";
import { useOutletContext } from "react-router-dom";
import image from "../../images/type1.png"

export default function KniveInfo() {

    return (
        <>
            <div className="specification-img"> 
                <img src={image} />
            </div>
            <div className="specification-row">
                <p>Blade Length:</p>
                <p>19.3cm</p>
            </div>
            <div className="specification-row">
                <p>Handle Length:</p>
                <p>13.5cm</p>
            </div>
            <div className="specification-row">
                <p>Width:</p>
                <p>4.3cm</p>
            </div>
            <div className="specification-row">
                <p>Tickness:</p>
                <p>2mm</p>
            </div>
            <div className="specification-row">
                <p>Weight:</p>
                <p>198g</p>
            </div>
        </>
    )
}