import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <div className="rootcontainer">
            <Header/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}