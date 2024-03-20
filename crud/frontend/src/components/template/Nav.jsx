import React from "react";
import './Nav.css';
import NavItem from "./NavItem";

export default props =>
    <aside className="menu-area">
        <nav className="menu">            
            <NavItem url="home" icon="home" text="Inicio"/>
            <NavItem url="users" icon="users" text="Usuario"/>
        </nav>
    </aside>
