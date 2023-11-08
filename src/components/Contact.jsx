import React from "react";
import port from "../assets/img/port.png";
import { contactText } from "../constants";
const Contact = () => {
    return (
        <section id="contact">
            <div className="contact__inner">
                <h2 className="contact__title">
                    <div className="contact__line" aria-hidden="true">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>

                    <div className="contact__text">
                        <div className="text">
                            <div className="left">
                                <p>CONTACT ME!!</p>
                                <div>
                                    <img src={port} alt="" />
                                </div>
                            </div>
                            <div className="right">
                                {contactText.map((con, key) => (
                                    <div key={key}>
                                        <p className="top">{con.key}</p>
                                        <p>{con.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="contact__line bottom" aria-hidden="true">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </h2>
            </div>
        </section>
    );
};

export default Contact;
