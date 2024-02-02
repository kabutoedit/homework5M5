import React from 'react';
import { Outlet } from "react-router-dom";
import "/src/App.css"


const Layout = () => {
    return (
        <div>
            <Outlet />
            <span>06.10.1946</span>
        </div>
    );
};

export default Layout;