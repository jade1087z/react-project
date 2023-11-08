import React from "react";
import port01 from "../assets/img/port.png";
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
                                    <img src={port01} alt="" />
                                </div>
                            </div>
                            <div className="right">
                                <div>
                                    <p className="top">PHONE</p>
                                    <p>010.7180.2384</p>
                                </div>
                                <div>
                                    <p className="top">Email</p>
                                    <p>010.7180.2384</p>
                                </div>
                                <div>
                                    <p className="top">github</p>
                                    <p>010.7180.2384</p>
                                </div>
                                <div>
                                    <p className="top">Name</p>
                                    <p>010.7180.2384</p>
                                </div>
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
