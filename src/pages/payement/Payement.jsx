import React, { Fragment, useState } from "react";
import s from "./payement.module.css";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { SiPaypal } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { PiCreditCardBold } from "react-icons/pi";
import { AiOutlineCreditCard } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import message from "../../Lotties/6.json";
import { useNavigate } from "react-router-dom";

export default function Payement() {
  
  const [payementcart, setPayementcart] = useState(false);
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const {
    totalUniqueItems,
    totalItems,
    cartTotal,
    emptyCart,
  } = useCart();


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    
    let validationErrors = {};
    
    
    // /^[0-9]{16}$/
    const cardNumberPattern = /^[0-9]{16}$/;
    if (!cardNumberPattern.test(inputs.numbertcart)) {
      validationErrors.numbertcart = "Le numéro de carte doit être composé de 16 chiffres.";
    }

  //  /^[0-9]{4}$/
    const codePattern = /^[0-9]{4}$/;
    if (!codePattern.test(inputs.code)) {
      validationErrors.code = "Le code de la carte doit être composé de 4 chiffres.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Raha mipa jiaby
    //reinitialisation des erreur stocké eto
    setErrors({});
    setPayementcart(true);

    setTimeout(() => {
      setPayementcart(false);
      emptyCart();
    }, 3000);

    setTimeout(() => {
    
      navigate("/");
    }, 4000);
  };
  

  return (
    <Fragment>
      <div className={`${s.parents}  flex flex-col p-20 items-center`}>
        <form className="w-full max-w-3xl" onSubmit={handleSubmit}>
          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fullname"
              >
                Nom et prénom
              </label>
              <input
                type="text"
                id="fullname"
                placeholder="Yann Andronio"
                className="outline-none mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md"
                style={{ color: "#212529", backgroundColor: "#f5f5f5" }}
                name="fullname"
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="numbertcart"
              >
                Numéro de carte
              </label>
              <input
                type="text"
                id="numbertcart"
                placeholder="xxxx-xxxx"
                className={`outline-none mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md ${errors.numbertcart ? 'border-red-500' : ''}`}
                style={{ color: "#212529", backgroundColor: "#f5f5f5" }}
                name="numbertcart"
                onChange={handleChange}
                required
              />
              {errors.numbertcart && <p className="text-red-500 text-xs italic">{errors.numbertcart}</p>}
            </div>
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="dateexp"
              >
                Date d'expiration
              </label>
              <input
                type="date"
                id="dateexp"
                className="mb-2 w-full rounded-md border outline-none border-gray-400 py-2 pl-2 pr-4 shadow-md"
                style={{ color: "#212529", backgroundColor: "#f5f5f5" }}
                name="dateexp"
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="code"
              >
                Code de la carte
              </label>
              <div
                className="flex items-center mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-2 shadow-md"
                style={{ color: "#212529", backgroundColor: "#f5f5f5" }}
              >
                <input
                  type="password"
                  id="code"
                  placeholder="****"
                  className={`flex-grow bg-transparent outline-none ${errors.code ? 'border-red-500' : ''}`}
                  name="code"
                  onChange={handleChange}
                  required
                />
                <PiCreditCardBold size={24} className="text-gray-500" />
              </div>
              {errors.code && <p className="text-red-500 text-xs italic">{errors.code}</p>}
            </div>
          </div>
          <h1 className={`${s.separation}`}>OU</h1>
          <div className={`${s.payement_button} flex mb-4 gap-4`}>
            <Link
              to="https://play.google.com/store/payment/"
              className={`${s.acheter} flex justify-center gap-2 bg-blue-500 text-white items-center py-2 px-4 rounded-lg mt-4 w-full text-center`}
              target="_blank"
            >
              <FcGoogle size={25} color="#DB4437" /> Google Play
            </Link>
            <Link
              to="https://www.paypal.com/webapps/"
              className={`${s.acheter} flex justify-center gap-2 bg-blue-500 text-white items-center py-2 px-4 rounded-lg mt-4 w-full text-center`}
              target="_blank"
            >
              <SiPaypal size={25} color="#003087" /> PayPal
            </Link>
          </div>
          <div className={`${s.facture} `}>
            <div className="bg-white rounded-lg shadow-md p-6">
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
                <span>3000 Ar</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Sous-total</span>
                <span>{cartTotal} Ar</span>
              </div>
              <div className="my-2">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total en Ariary:</span>
                  <span className="font-semibold">{cartTotal + 3000} Ar</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total en Franc : </span>
                  <span className="font-semibold">
                    {(cartTotal + 3000) * 5} Fmg
                  </span>
                </div>
                <button
                  className={`${s.acheter} flex justify-center items-center py-2 px-4 rounded-lg mt-4 w-full`}
                >
                  <AiOutlineCreditCard size={25} className="mr-2" /> Payer
                  maintenant
                </button>
              </div>
            </div>
          </div>
        </form>
        <AnimatePresence>
          {payementcart && (
            <motion.div
              id="toast-simple"
              className={`${s.Boxnotif} flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800`}
              role="alert"
              initial={{ x: "100vw" }}
              animate={{ x: "0" }}
              exit={{ x: "100vw" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Lottie
                animationData={message}
                style={{ width: "30%" }}
                loop={false}
              />
              <div className="text-green-400 ps-4 text-sm font-bold">
                {" "}
                Votre paiement a été bien réussi
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Fragment>
  );
}
