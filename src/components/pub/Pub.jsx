import React, { Fragment } from 'react'
import s from "./pub.module.css"
import { Link as ScrollLink } from 'react-scroll'


export default function Pub() {
    return (
        <Fragment>
            <div className={`${s.BoxParents}  flex gap-2`}>

                <div className={`${s.Box1} rounded-md justify-between flex items-center p-5 shadow-lg`}>
                    <div className="infos text-start max-w-md">
                        <h2 className="text-2xl font-bold mb-2 text-gray-800">Profitez de nos offres exclusives !</h2>
                        <p className="mb-4 text-gray-600">Découvrez des remises incroyables sur une large sélection de produits. Ne manquez pas cette opportunité !</p>

                        <ScrollLink
                            to="produitderecherche" smooth={true} duration={500}
                            className={`${s.voirlesproduct} rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                        >
                            Voir les offres
                        </ScrollLink>

                    </div>
                    <div className={`${s.sary} flex justify-center items-center ml-8`}>
                        <img className="w-48 h-48 object-cover rounded-lg" src="./image/pub/1.png" alt="Promotion" />
                    </div>
                </div>

                <div className={`${s.Box2} flex flex-col gap-2`}>
                    <div className={`${s.LittleBox1} p-3 rounded-md h-full flex items-center bg-gray-100 shadow-md`}>
                        <div className="infos text-start w-1/2 max-w-md">
                            <h2 className="text-2xl font-bold mb-2 text-gray-800">Des nouvelles produits arrives !  </h2>

                        </div>
                        <div className={`${s.sary2} w-1/2 flex justify-center items-center`}>
                            <img className="w-48 h-48 object-cover" src="./image/pub/2.png" alt="Promotion" />
                        </div>
                    </div>


                    <div className={`${s.LittleBox2} p-3 rounded-md flex h-full justify-between items-center bg-gray-100 shadow-md`}>
                        <div className="infos text-start w-1/2 max-w-md">
                            <h2 className="text-2xl font-bold mb-2 text-gray-800">Des Remises Exceptionnelles  Profites - en !</h2>

                        </div>
                        <div className={`${s.sary2} w-1/2 flex justify-center items-center`}>
                            <img className="w-48 h-48 object-cover" src="./image/pub/3.png" alt="Promotion" />
                        </div>

                    </div>

                </div>
            </div>


        </Fragment>
    )
}
