import React from "react";
import { Link } from "react-router-dom";
import chopping from "/src/images/chopping.jpg"

export default function Home() {
    return (
        <div>
            <div className="hero-image">
                <h1>Katana Knives</h1>
                <h3>Traditional Japanesee Steel</h3>
            </div>
            <div className="home-content">                
                <h2>Sharpened the same techique as legendary katana sword</h2>
                <p>Our knives are made traditional way. The technique wes told through generations from father to son. It was known only in small region, far North in Japan Mountains. Hakaiku the knife master now changed the direction...</p>
                <Link to='knives'>
                    <button className="paragraph-button">Find out more</button>
                </Link>
                <h2>Forged for Kitchen Samurai</h2>
            </div>
            <div className="features-container">
                <img src={chopping}></img>
                <div className="feature-1">
                    <h3>Feature 1</h3>
                    <p >Here test text to check how the feature is working. Should display text on hover or click.</p>
                </div>
                <div className="feature-2">
                    <h3>Feature 2</h3>
                </div>
                <div className="feature-3">
                    <h3>Feature 3</h3>
                </div>
                <div className="feature-4">
                    <h3>Feature 4</h3>
                </div>
            </div>
        </div>
    )
}