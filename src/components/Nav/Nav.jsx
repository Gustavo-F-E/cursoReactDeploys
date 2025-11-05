import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { useCartContext } from "../../context/CartContext/useCartContext";

export const Nav = () => {
    const { getTotalItems } = useCartContext();
    const [isOpen, setIsOpen] = useState(false); // Estado para el menú móvil

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`main-nav ${isOpen ? 'menu-is-open' : ''}`}>
            
            {/* Botón Hamburger visible solo en móvil (Posición: Abajo) */}
            <button className="hamburger-btn" onClick={toggleMenu} aria-expanded={isOpen}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </button>

            {/* Menú de navegación (La clase is-open controla la visibilidad) */}
            <ul className={`nav-list ${isOpen ? 'is-open' : ''}`}>
                <li>
                    <Link to={"/"} onClick={toggleMenu}>Home</Link>
                </li>
                <li>
                    <Link to={"/productos"} onClick={toggleMenu}>Productos</Link>
                </li>
                <li>
                    <Link to={"/servicios"} onClick={toggleMenu}>Servicios</Link>
                </li>
                <li>
                    <Link to={"/nosotros"} onClick={toggleMenu}>Nosotros</Link>
                </li>
                <li>
                    <Link to={"/donde-estamos"} onClick={toggleMenu}>Donde estamos</Link>
                </li>
                <li>
                    <Link to={"/contacto"} onClick={toggleMenu}>Contacto</Link>
                </li>
                <li>
                    <Link to={"/carrito"} onClick={toggleMenu}>
                        Carrito
                    </Link>
                    {getTotalItems() > 0 && <span className="in-cart">{getTotalItems()}</span>}
                </li>
            </ul>
        </nav>
    );
};