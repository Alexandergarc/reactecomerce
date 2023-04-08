import React from "react";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";

export const NavBar= () => {
    return (
        <div className="container">
            <nav className="nav">
                <div>
                    <NavLink className="navLink" to='/'>Books</NavLink>
                </div>
                <ul className="navList">
                    <li>
                     <NavLink className="navLink" to={'/categoria/Novela'}>Novelas</NavLink>
                    </li>
                    <li>
                     <NavLink className="navLink" to={'/categoria/Fantasia'}>Fantasias</NavLink>
                    </li>
                    <li>
                     <NavLink className="navLink" to={'/cart'}><CartWidget /></NavLink>
                    </li>
                </ul>

            </nav>
        </div>
    );

}

export default NavBar;