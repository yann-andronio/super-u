import React, { Fragment } from 'react';
import s from "./Cart.module.css";
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';

export default function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart

    } = useCart();

    if (isEmpty) {
        return <h1 className={`${s.vide} text-2xl mt-60 font-semibold mb-4 text-center`}>Votre panier est vide</h1>;
    }

    return (
        <Fragment>
            <div className="bg-gray-100 h-screen py-8">
                <div className={`${s.Boxparents} container mx-auto px-4`}>
                    <h1 className="text-2xl font-semibold mb-4">Panier</h1>
                    <div className={`${s.Boxpanier} flex  md:flex-row gap-4`}>
                    {/* md:w-3/4 */}
                        <div className={`${s.Box1}`}>
                            <div className={`${s.Box1_child}  bg-white rounded-lg shadow-md p-6 mb-4 `}>

                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th className="text-left font-semibold">Produit</th>
                                            <th className="text-left font-semibold">Prix</th>
                                            <th className="text-left font-semibold">Quantité</th>
                                            <th className={`${s.totalsoratra} text-left font-semibold  `}>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items.map((item, index) => (
                                            <tr key={index} className={index !== items.length - 1 ? "mb-4" : ""}>
                                                <td className="py-4">
                                                    <div className="flex items-center">
                                                        <img className={`${s.saryy} h-16 w-16 mr-4 `} src={`image/product/${item.sary}.png`} alt={item.name} />
                                                        <span className={`${s.nom} font-semibold `}>{item.name}</span>
                                                    </div>
                                                </td>
                                                <td className="py-4">{item.price}</td>
                                                <td className="py-4">
                                                    <div className="flex items-center">
                                                        <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="border rounded-md py-2 px-4 mr-2">-</button>
                                                        <span className="text-center w-8">{item.quantity}</span>
                                                        <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="border rounded-md py-2 px-4 ml-2">+</button>
                                                    </div>
                                                </td>
                                                <td className={`${s.totalprix} py-4`}>{item.price * item.quantity}</td>
                                                <td className="py-4">
                                                    <button onClick={() => removeItem(item.id)} className={`${s.deleteone} btn btn-danger ms-2`}>Supprimer l'article</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <button className={`${s.supall} btn  m-2`} onClick={() => emptyCart()}>Supprimer Tout</button>
                        </div>


                                        {/* md:w-1/4 */}
                        <div className={`${s.Box2} `}>
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-lg font-semibold mb-4">Résumé</h2>
                                <div className="flex justify-between mb-2">
                                    <span>Nombre d'article :</span>
                                    <span> {totalUniqueItems} </span>

                                </div>
                                <div className="flex justify-between mb-2">

                                    <span>Articles totaux: </span>
                                    <span>{totalItems}</span>
                                </div>

                                <div className="flex justify-between mb-2">
                                    <span>Livraison</span>
                                    <span>3000 Ar</span> {/* Assurez-vous de remplacer cette valeur par la variable correcte pour la livraison */}
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Sous-total</span>
                                    <span>{cartTotal} Ar</span>
                                </div>


                                <div className="my-2">
                                    <div className="flex justify-between mb-2">
                                        <span className="font-semibold">Total en Ariary:</span>
                                        <span className="font-semibold">{cartTotal + 3000 /* Assurez-vous de calculer correctement le total */} Ar</span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-semibold">Total en Franc : </span>
                                        <span className="font-semibold">{(cartTotal + 3000) * 5 /* Assurez-vous de calculer correctement le total */} Fmg</span>
                                    </div>
                                  
                                    <Link to="/payement" className={`${s.acheter}  flex justify-center  py-2 px-4 rounded-lg mt-4 w-full`}>Acheter maintenant</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </Fragment>
    );
}
