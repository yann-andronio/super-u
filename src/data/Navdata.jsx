import Home from "../pages/home/Home";
import CartPage from "../pages/cartpage/CartPage";
import Categorie from "../components/categorieMenu/CategorieMenu";
import Contact from "../pages/contact/Contact";
import Apropos from "../pages/apropos/Apropos";
import Payement from "../pages/payement/Payement";




const NavData = [
    { 
        path: "/",
        page: Home
    },
    {
        path: "/cartpage",
        page: CartPage
    },
    {
        path: "/contact",
        page: Contact
    },
    {
        path: "/apropos",
        page: Apropos
    },
    {
        path: "/payement",
        page: Payement
    },
    

    // {
    //     path: "/:section?",
    //     page: Home
    // },
 
 
]
export default NavData