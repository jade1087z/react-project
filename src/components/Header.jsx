import React, { useState } from "react";

import { headerNav } from "../constants/index";

const Header = () => {
    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow((prevShow) => !prevShow); // true가 들어가면 false를 반납함
    };

    return (
        <div id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                    <a href="/">
                        portfolio <em>developer</em>
                    </a>
                </div>
                <nav
                    className={`header__nav ${show ? "show" : ""}`}
                    role="navigation"
                    aria-label="메인 메뉴"
                >
                    <ul>
                        {headerNav.map((head, key) => (
                            <li key={key}>
                                <a href={head.url}>{head.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div
                    className="header__nav__mobile"
                    id="headerToggle"
                    aria-controls="primary-menu"
                    aria-expanded={show ? "true" : "false"}
                    role="button"
                    onClick={toggleMenu}
                >
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default Header;
