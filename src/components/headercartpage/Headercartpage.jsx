import React, { Fragment } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from "react-icons/fa";
import s from "./headercartpage.module.css";
import { useCart } from 'react-use-cart';
import { Link as ScrollLink } from 'react-scroll';
import { Link, NavLink } from 'react-router-dom';

export default function Headercartpage() {
    const { totalItems } = useCart();

    return (
        <Fragment>
            <header className={`${s.header}`}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Tenth navbar example">
                    <div className="container-fluid px-3">
                        <div className={`${s.logo}`}>
                            <h1>Super - U</h1>
                        </div>

                        <div className={`${s.list_link} d-flex`}>
                            <ul className="d-none d-lg-flex gap-3">
                                <li className="nav-item">
                                    <NavLink to='/' className={({ isActive }) => isActive ? `${s.active}` : `${s.link}`}> Menu </NavLink>
                                </li>
                                {/* <li className="nav-item">
                                    <Link to='/categorie' className={`${s.link}`}> Categories </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/promotion' className={`${s.link}`}> Promotion </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/produitderecherche' className={`${s.link}`}> Produits </Link>
                                </li> */}
                                <li className="nav-item">
                                    <NavLink to='/contact'className={({ isActive }) => isActive ? `${s.active}` : `${s.link}`}> Contact </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to='/apropos' className={({ isActive }) => isActive ? `${s.active}` : `${s.link}`}> A propos </NavLink>
                                </li>

                            </ul>
                        </div>

                        <div className={`${s.search} d-flex gap-4`}>
                            <form className="d-none d-md-flex" role="search">
                                <input placeholder='Rechercher' className="form-control me-2" />
                            </form>
                            <Link to='/cartpage' className={`${s.cart}`}>
                                <FaShoppingCart className={`${s.cart_icon}`} />
                                <div className={`${s.notification}`}>{totalItems}</div>
                            </Link>
                            <div className="user">
                                <FaUser className={`${s.user_icon}`} />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </Fragment>
    );
}
