import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/ui/Footer";
import NavBar from "../components/ui/NavBar";
import MenuRoutes from "./MenuRoutes";

export default function AppRouter() {
    return (
        <>
            <NavBar />
            <main className="container">
                <Routes>
                    <Route path="/*" element={<MenuRoutes />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

