import React from 'react';
import { Outlet } from "react-router-dom";
import "/src/App.css"


const Layout = () => {
    return (
        <div>
            <Outlet />
            <span>20.12.90</span>
        </div>
    );
};

export default Layout;