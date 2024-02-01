import React from 'react';
import NavBar from "./NavBar.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <NavBar/>
            <main>
                <Outlet/>
            </main>
            <footer>Geeks 2024</footer>
        </div>
    );
};

export default Layout;