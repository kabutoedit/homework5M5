import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Главная</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">О нас</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;