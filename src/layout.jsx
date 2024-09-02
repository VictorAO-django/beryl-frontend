import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./pages/main/header";
import Footer from "./pages/main/footer";

function Layout(){
    return (
        <div className="">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;