import React from 'react';
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
            <div>
                <Outlet/>
                <span>MADE BY KOLYA</span>
            </div>
    );
};

export default Layout;