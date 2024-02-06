// import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

import {useDispatch,useSelector} from "react-redux";
import {useEffect} from "react";
import {marketAction} from "../store/marketAction.js";
// import { increment } from "../store/marketAction.js";

const NavBar = () => {

    const count = useSelector((state) => state.marketState.counter)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(marketAction())
    },[dispatch])

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to={"/"}>Market page</NavLink>
                </li>
                <li>
                    <NavLink to={"/info"}>Info</NavLink>
                </li>
                <li className={'couter'}>
                    {count}
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;