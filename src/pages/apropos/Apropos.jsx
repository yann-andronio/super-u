import React, { Fragment } from 'react'
import { FaTools } from 'react-icons/fa';
import s from "./apropos.module.css";
import Headercartpage from '../../components/headercartpage/Headercartpage';

export default function Apropos() {
  return (
   <Fragment>
     <section className="bg-whitesmoke" id="under-construction">
     <Headercartpage />
            <div className=" h-screen flex justify-center align-items-center mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="text-center">
                    <FaTools size={48} style={{ color: '#9f7126' }} className="mx-auto mb-4" />
                    <h2 className="font-heading mb-4 font-bold tracking-tight" style={{ color: '#212529', fontSize: '2.5rem', lineHeight: '1.2' }}>
                        Page en Construction
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-xl" style={{ color: '#555', lineHeight: '1.5' }}>
                        je travaille actuellement sur cette page pour vous offrir une meilleure expérience. Revenez bientôt pour découvrir les nouveautés !
                    </p>
                </div>
            </div>
        </section>
   </Fragment>
  )

}
