import React from 'react';
import {NavLink} from "react-router-dom";
import "/src/App.css"


const NavBar = () => {
    return (
        <div>
                <nav>
                    <ul>
                            <li>
                                <NavLink to={"/create_post"}>Create</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/posts"}>Post</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/"}>Go back</NavLink>
                            </li>
                    </ul>

                </nav>
        </div>
    );
};

export default NavBar;