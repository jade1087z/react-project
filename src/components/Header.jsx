import React from "react";

const Header = () => {
    return (
        <div id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                    <a href="/">
                        portfolio <em>developer</em>
                    </a>
                </div>
                <div
                    className="header__nav"
                    role="navigation"
                    aria-label="메인 메뉴"
                >
                    <ul>
                        <li>
                            <a href="#intro">intro</a>
                        </li>
                        <li>
                            <a href="#skill">skill</a>
                        </li>
                        <li>
                            <a href="#site">site</a>
                        </li>
                        <li>
                            <a href="#port">portfolio</a>
                        </li>
                        <li>
                            <a href="#contact">contact</a>
                        </li>
                    </ul>
                </div>
                <div
                    className="header__nav__mobile"
                    id="headerToggle"
                    aria-controls="primary-menu"
                    aria-expanded="false"
                    role="button"
                >
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default Header;
