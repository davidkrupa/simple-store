import React from "react";

export default function Contact() {

    return (
        <div className="contact-form-container">
            <h1>Contact us</h1>
            <form className="contact-form">
                <input
                    type="name"
                    name="name"
                    placeholder="Name"
                    className="field-style"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="field-style"
                />
                <textarea 
                    name="question" 
                    rows="8"
                    cols="100"
                    className="field-style"
                >
                </textarea>
                <button className="contact-button">Send your message</button>
            </form>
        </div>
    )
}