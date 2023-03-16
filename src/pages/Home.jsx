import React from "react";
import { Link } from "react-router-dom";
import chopping from "/src/images/chopping.jpg"

export default function Home() {

    return (
        <div>
            <div className="hero">
                <h1>Katana Knives</h1>
                <h3>Traditional Japanesee Steel</h3>
            </div>
            <section className="home-paragraph">                
                <h2>Sharpened the same techique as legendary katana sword</h2>
                <p>Our knives are made traditional way. The technique wes told through generations from father to son. It was known only in small region, far North in Japan Mountains. Hakaiku the knife master now changed the direction...</p>
                <Link to='knives'>
                    <button>Find out more</button>
                </Link>
                <h2>Forged for a kitchen <span>Samurai</span></h2>
            </section>
            <section className="features-container">
                <img src={chopping}></img>
                <div className="feature-1">
                    <h3>Razor Sharp +</h3>
                    <p >Here test text to check how the feature is working. Should display text on hover or click.</p>
                </div>
                <div className="feature-2">
                    <h3>+ Elegant</h3>
                    <p >Here test text to check how the feature is working. Should display text on hover or click.</p>
                </div>
                <div className="feature-3">
                    <p >Here test text to check how the feature is working. Should display text on hover or click.</p>
                    <h3>Solid +</h3>
                </div>
                <div className="feature-4">
                    <p >Here test text to check how the feature is working. Should display text on hover or click.</p>
                    <h3>+ Easy to clean</h3>
                </div>
            </section>
            <section>
                <h2>Best Knives for your kitchen</h2>
                <p>Our knives are the best gift for yourself in your kitchen adventures. Having reliable knives is what every kitchen master must have.</p>
            </section>
        </div>
    )
}