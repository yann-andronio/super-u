import React, { Fragment } from 'react';
import s from "./headerDown.module.css";
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import test from "../../Lotties/4.json";
import { Link as ScrollLink } from 'react-scroll';

export default function HeaderDown() {
    return (
        <Fragment>
            <div className={`${s.Boxparents}`}>
                <div className={`${s.Box} mx-auto py-5 sm:px-6 sm:py-32`}>
                    <div className={`${s.Boxhead} relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24`}>
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                                Bienvenue chez Super U
                                <br />
                                Votre supermarché en ligne
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-white" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                                Faites vos courses facilement et profitez de la livraison rapide à domicile. Explorez nos offres exclusives et découvrez la commodité du shopping en ligne.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                <ScrollLink
                                    to="produitderecherche" smooth={true} duration={500}
                                    className={`${s.voirlesproduct} rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                                >
                                    Voir les produits
                                </ScrollLink>
                                <Link to="#" className={`${s.ensavoirplus} text-sm font-semibold leading-6  `} style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                                    En savoir plus <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>
                        {/* Image */}
                        <div className="relative mt-16 h-80 lg:mt-0 lg:w-1/2">
                            <Lottie animationData={test} style={{ width: "90%" }} />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
