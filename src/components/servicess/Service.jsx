import React, { Fragment } from 'react'
import s from "./service.module.css"
import { LiaShippingFastSolid } from "react-icons/lia";
import { RxCountdownTimer } from "react-icons/rx";
import { MdPayment } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";

export default function Service() {

    const iconservice = [{ name: "livraison moins cher", description: "Pour tout les achats", icon: LiaShippingFastSolid },
    { name: "90 jours de retour", description: "si les marchandises ont un problème", icon: RxCountdownTimer },
    { name: "paiement sécurisé", description: "100% securiser", icon: MdPayment },
    { name: "ouvert 7j/7", description: "commmandez tout", icon: LuCalendarDays },
    ];


    return (
        <Fragment>
            <div className={`${s.Boxparents} p-4`}>
                <h1 >Nos Service </h1>
                <div className={`${s.ChildBox} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4`}>
                    {
                        iconservice.map((item, index) => (
                            <div key={index} className={`${s.Box} flex flex-col justify-center items-center bg-white p-4 shadow-lg rounded-lg`}>
                                <div className="mb-2">
                                    {React.createElement(item.icon, { size: 25 })}
                                </div>
                                <div className={`${s.Info} text-center`}>
                                    <h2 className="text-lg font-semibold">{item.name}</h2>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </Fragment>
    )
}
