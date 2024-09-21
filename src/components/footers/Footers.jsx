import React, { Fragment } from 'react';
import s from "./footers.module.css";
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub, FaPinterestP, FaTiktok, FaMapMarkerAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { ImPhone } from 'react-icons/im';
import { BsFillChatDotsFill } from 'react-icons/bs';

export default function Footers() {
    return (
        <Fragment>
            <footer className={`${s.footer}  text-center text-surface/75  dark:text-white/75 lg:text-left`}>
                <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
                    <div className="me-12 hidden lg:block">
                        <span>Rejoignez-moi sur les réseaux sociaux :</span>
                    </div>
                    <div className="flex justify-center">
                        <a href="#!" className="me-6">
                            <FaFacebookF className="h-4 w-4" />
                        </a>
                        <a href="#!" className="me-6">
                            <FaTwitter className="h-4 w-4" />
                        </a>
                        <a href="#!" className="me-6">
                            <FaGoogle className="h-4 w-4" />
                        </a>
                        <a href="#!" className="me-6">
                            <FaInstagram className="h-4 w-4" />
                        </a>
                        <a href="#!" className="me-6">
                            <FaLinkedin className="h-4 w-4" />
                        </a>
                        <a href="#!" className="me-6">
                            <FaGithub className="h-4 w-4" />
                        </a>
                        <a href="#!" className="me-6">
                            <FaPinterestP className="h-4 w-4" />
                        </a>
                        <a href="#!" className="me-6">
                            <FaTiktok className="h-4 w-4" />
                        </a>
                    </div>
                </div>

                <div className="mx-6 py-10 text-center md:text-left">
                    <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <h6 className={`${s.logo} mb-4 flex items-center justify-center font-semibold uppercase md:justify-start `}>
                                super - u
                            </h6>
                            <p>
                                Faites vos courses facilement et profitez de la livraison rapide à domicile. Explorez nos offres exclusives et découvrez la commodité du shopping en ligne.
                            </p>
                        </div>
                        <div className=' flex items-start flex-col'>
                            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                nos produits
                            </h6>

                            <p className="mb-4">
                                produit alimentaire
                            </p>
                            <p className="mb-4">
                                Produits électronique
                            </p>
                            <p className="mb-4">
                                Produits Cosmétique
                            </p>
                            <p>
                                produits de menage
                            </p>

                        </div>
                        <div className=' flex items-start flex-col'>
                            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                A propos
                            </h6>

                            <p className="mb-4">
                                payement securiser
                            </p>

                            <p className="mb-4">
                                service rapide
                            </p>

                            <p className="mb-4">
                                disponible 7j/7
                            </p>
                            <p>
                                livraison moins cher
                            </p>
                        </div>
                        <div>
                            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                Contact
                            </h6>
                            <p className="mb-4 flex items-center justify-center md:justify-start">
                                <FaMapMarkerAlt className="me-3 h-5 w-5" />
                                Antananarivo 101
                            </p>
                            <p className="mb-4 flex items-center justify-center md:justify-start">
                                <HiMail className="me-3 h-5 w-5" />
                                todiveloyannandronio@gmail.com
                            </p>
                            <p className="mb-4 flex items-center justify-center md:justify-start">
                                <ImPhone className="me-3 h-5 w-5" />
                                0342290407
                            </p>
                            <p className="flex items-center justify-center md:justify-start">
                                <BsFillChatDotsFill className="me-3 h-5 w-5" />
                                0342290407
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}
