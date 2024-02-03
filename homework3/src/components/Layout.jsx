import React from 'react';
import {Outlet} from "react-router-dom";

const Layout = () => {

    return (
        <div>
            <Outlet/>
            <span>18.12.2007</span>
        </div>
    );
};

export default Layout;