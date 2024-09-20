import React, { Fragment } from 'react'
import s from "./cardresult.module.css"

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineShoppingCart } from "react-icons/hi2";
export default function Cardresult({ item, handleModalSubmit, addItem }) {



    return (
        <Fragment>


            <motion.div
                key={item.id}
                className="relative m-10 flex w-full h-96 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -30 }}
                transition={{ duration: 0.6, delay: item.id * 0.1, type: "spring", stiffness: 150 }}
            >
                <Link className={`relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl justify-center`} href="#">
                    <img src={`image/product/${item.sary}.png`} alt={item.name} />
                    <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{item.promotion}</span>
                </Link>
                <div className="mt-4 px-5 pb-5">
                    <Link href="#">
                        <h5 className="text-xl tracking-tight text-slate-900">{item.name}</h5>
                    </Link>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                        <p>
                            <span className="text-3xl font-bold text-slate-900">{item.prix} Ar</span>
                            <span className="text-sm text-slate-900 line-through">{item.remise}</span>
                        </p>
                        <div className="flex items-center">
                            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{item.note}</span>
                        </div>
                    </div>
                    <Link onClick={() => {
                        addItem({ id: item.id, name: item.name, sary: item.sary, price: item.prix, etoile: item.etoile });
                        handleModalSubmit();
                    }} className={`${s.ajout} flex items-center justify-center rounded-md bg-slate-900 py-3 px-3 gap-3 text-center text-sm font-medium `}>
                        <HiOutlineShoppingCart size={20} />
                        <button

                        >
                            Ajouter au panier
                        </button>
                    </Link >
                </div>
            </motion.div>


        </Fragment>
    )
}
