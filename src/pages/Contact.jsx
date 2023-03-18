import React from "react";

export default function Contact() {

    return (
        <div className="contact-form-container">
            <h1>Contact us</h1>
            <form className="contact-form">
                <div>
                    <input
                        type="name"
                        name="name"
                        placeholder="Name"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                    />
                </div>
                <textarea name="question" rows="4">
                </textarea>
                <button>Send your message</button>
            </form>
        </div>
    )
}