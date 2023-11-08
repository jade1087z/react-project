import React from "react";

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro__inner">
                <h1 className="intro__title">frontend developer</h1>
                <div className="intro__lines" aria-hidden="true">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>

                <div className="intro__text">
                    <div className="text">
                        <div>talent is</div>
                        <div>found at the end of the</div>
                        <div>effort</div>
                    </div>
                    <div className="img__wrap"></div>
                </div>

                <div className="intro__lines bottom" aria-hidden="true">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
