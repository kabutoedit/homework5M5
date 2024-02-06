import React from 'react';
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Outlet/>
            <span>Made by Kolya</span>
        </div>
    );
};

export default Layout;