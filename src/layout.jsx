import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./pages/main/header";

function Layout(){
    return (
        <div className="border border-yellow-600">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;