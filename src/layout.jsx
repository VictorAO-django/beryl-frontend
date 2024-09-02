import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./pages/main/header";

function Layout(){
    return (
        <div>
            <Header />
            <main className="">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;