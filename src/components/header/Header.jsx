import React, { Fragment } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from "react-icons/fa";
import s from "./header.module.css";
import { useCart } from 'react-use-cart';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';


export default function Header({ handleSearchInput }) {
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
                                <ScrollLink to="menu" smooth={true} duration={500} spy={true} hashSpy={true}  offset={-50}className={`${s.link}`}> Menu </ScrollLink>
                                </li>


                                <li className="nav-item">
                                    <ScrollLink to="categorie" smooth={true} duration={500} spy={true} hashSpy={true}  offset={-50}className={`${s.link}`}> Categories </ScrollLink>
                                </li>

                                <li className="nav-item">
                                    <ScrollLink to="contact" smooth={true} duration={500} spy={true} hashSpy={true}  offset={-50}className={`${s.link}`}> Promotion </ScrollLink>
                                </li>
                                <li className="nav-item">
                                    <ScrollLink to="produitderecherche" smooth={true} duration={500} spy={true} hashSpy={true}  offset={-50}className={`${s.link}`}> Produits </ScrollLink>
                                </li>
                            </ul>
                        </div>

                        <div className={`${s.search} d-flex gap-4`}>
                            <form className="d-none d-md-flex" role="search">
                                <input placeholder='Rechercher' className="form-control me-2" onChange={handleSearchInput} />
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
