import React, { Fragment } from 'react'
import s from "./cartpage.module.css"
import Cart from '../../components/cart/Cart'
import Headercartpage from '../../components/headercartpage/Headercartpage'
export default function CartPage() {
    return (
        <Fragment>
        
            <Headercartpage />
            {/* mt-5 px-5 */}
            <main className={` ${s.tranobe} mt-5 `}>

                <h1 className={`${s.title} `}>Votre carte</h1>
                <Cart />

            </main>




            {/* <Element name='Apropos'>
                <div className={`${s.footer}`}>
                    <Footers />
                </div>
            </Element> */}

        </Fragment>
    )
}
