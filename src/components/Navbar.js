import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary flex-column">
        <div className="navbar-brand">Note App</div>

        <ul className="navbar-nav flex-column">
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    to="/"
                >
                    Main
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    to="/info"
                >
                    Info
                </NavLink>
            </li>
        </ul>
    </nav>
)
