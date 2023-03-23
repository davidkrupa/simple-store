import React, { useState } from "react";
import { Link } from "react-router-dom";
import chopping from "/src/images/chopping.jpg"

export default function Home() {
    const [isFeatureActive, setIsFeatureActive] = useState([
            {id: "feature1", isActive: true},
            {id: "feature2", isActive: false},
            {id: "feature3", isActive: false},
            {id: "feature4", isActive: false}
        ])

    function showFeature(id) {
        setIsFeatureActive(prev => prev
            .map(el => ({...el, isActive: el.id === id ? !el.isActive : false} ))
        )
    }

    const featureVisible = {
        display: "block"
    }
    
    const featureNotVisible = {
        display: "none",
    }

    console.log(isFeatureActive)

    return (
        <div>
            <div className="hero">
                <h1>Katana Knives</h1>
                <h3>Traditional Japanesee Steel</h3>
            </div>
            
            <section className="home-paragraph">                
                <h2>Sharpened the same techique as legendary katana sword</h2>
                <p>At the heart of Japanese kitchen knives is the concept of "sharpening." Japanese bladesmiths believe that sharpening is an art form that requires patience, precision, and a deep understanding of the materials being used. Whether you're a sushi chef or a home cook our Japanese knives will elevate your culinary game and make every meal a work of art.</p>
                <Link to='knives'>
                    <button className="paragraph-button">Find out more</button>
                </Link>
            </section>

            <section className="features-container">
                <img src={chopping}></img>
                <div className="features-table">
                    <div 
                        className="feature"
                        onClick={() => showFeature("feature1")}
                    >
                        <h3>Razor Sharp<span>+</span></h3>
                        <p 
                            style={isFeatureActive[0].isActive 
                                ? {display: "block"} 
                                : {display: "none"}
                            }
                        >
                            The sharpness of the blade allows for clean, precise cuts that preserve the integrity of the food being prepared. Great precision and control when cutting.
                        </p>
                    </div>
                    <div 
                        className="feature" 
                        onClick={() => showFeature("feature2")}
                    >
                        <h3>Comfortable<span>+</span></h3>
                        <p 
                            style={isFeatureActive[1].isActive 
                                ? {display: "block"} 
                                : {display: "none"}
                            }
                        >
                            Our knives handles provide a comfortable grip and help prevent hand fatigue during extended use.
                        </p>
                    </div>
                    <div 
                        className="feature" 
                        onClick={() => showFeature("feature3")}
                    >
                        <h3>Handcrafted<span>+</span></h3>
                        <p 
                            style={isFeatureActive[2].isActive 
                                ? {display: "block"} 
                                : {display: "none"}
                            }
                        >
                            Handcrafted using traditional techniques. Each knife is unique and reflects the skill and artistry of the bladesmith.
                        </p>
                    </div>
                    <div 
                        className="feature" 
                        onClick={() => showFeature("feature4")}
                    >
                        <h3>Durable<span>+</span></h3>
                        <p 
                            style={isFeatureActive[3].isActive 
                                ? {display: "block"} 
                                : {display: "none"}
                            }
                        >
                            Made of hard, high-carbon steel that lasts longer than other types of steel. This steel is more resistant to corrosion, making it an ideal material for kitchen knives.
                        </p>
                    </div>
                </div>
            </section>

            <section className="home-paragraph-second">
                <h2>Forged for every kitchen <span>Samurai</span></h2>
                <p>Katana knives are more than just a tool. They are a symbol of Japanese craftsmanship, tradition, and culture. With their sharp edges, elegant designs, and exceptional quality, these knives are a testament to the artistry and dedication of the bladesmiths who create them.</p>
                <Link to='knives'>
                    <button className="paragraph-button">Check our knives</button>
                </Link>
            </section>
        </div>
    )
}


        // setIsFeatureActive(prev => {
        //    return{...prev, [id]: !prev.id}
        // })  