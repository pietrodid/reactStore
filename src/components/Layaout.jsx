import React from "react";
import { Header } from "./Header";
import {Footer} from "./Footer";
import '../styles/components/Layaout.css';

const Layaout = ({ children }) => {
    return (
        <div className="Layaout">
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export  { Layaout }; 