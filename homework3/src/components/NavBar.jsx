import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/homePage"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/postPage"}>Posts</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;