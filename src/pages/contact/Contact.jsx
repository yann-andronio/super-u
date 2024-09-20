import React, { Fragment, useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from "react-icons/fa";
import s from "./contact.module.css";
import Headercartpage from "../../components/headercartpage/Headercartpage";
import Lottie from "lottie-react";
import message from "../../Lotties/7.json";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";

export default function Contact() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleModalSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        setModalIsOpen(true);

        setTimeout(() => {
            setModalIsOpen(false);
        }, 2200);

        setTimeout(() => {
            navigate("/")
        }, 2500);
    };

    return (
        <Fragment>
            <section className="bg-whitesmoke" id="contact">
                <Headercartpage />

                <div className="h-screen mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div className="mb-4">
                        <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                            <p
                                className="mx-auto mt-2 max-w-3xl text-xl"
                                style={{ color: "#555", lineHeight: "1.5" }}
                            >
                                Pour toute question ou suggestion, n'hésitez pas à nous
                                contacter.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-stretch justify-center">
                        <div className="grid md:grid-cols-2">
                            <div className="h-full pr-6">
                                <p
                                    className="mt-3 mb-12 text-lg"
                                    style={{ color: "#555", lineHeight: "1.5" }}
                                >
                                    Chez Super U, nous nous engageons à vous offrir une expérience
                                    d'achat exceptionnelle. Pour toute question ou suggestion,
                                    n'hésitez pas à nous contacter. Notre équipe est là pour vous
                                    assister.
                                </p>
                                <ul className="mb-6 md:mb-0">
                                    <li className="flex">
                                        <div
                                            className="flex h-10 w-10 items-center justify-center rounded"
                                            style={{ backgroundColor: "#212529", color: "#fff" }}
                                        >
                                            <FaMapMarkerAlt className="h-6 w-6" />
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3
                                                className="mb-2 text-lg font-medium leading-6"
                                                style={{ color: "#212529" }}
                                            >
                                                Notre Adresse
                                            </h3>
                                            <p style={{ color: "#555" }}>Lot VT 3A BIS ZAI</p>
                                            <p style={{ color: "#555" }}>Andohanihato Ambohipo 101</p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div
                                            className="flex h-10 w-10 items-center justify-center rounded"
                                            style={{ backgroundColor: "#212529", color: "#fff" }}
                                        >
                                            <FaPhoneAlt className="h-6 w-6" />
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3
                                                className="mb-2 text-lg font-medium leading-6"
                                                style={{ color: "#212529" }}
                                            >
                                                Contact
                                            </h3>
                                            <p style={{ color: "#555" }}>Mobile: 0342290407</p>
                                            <p style={{ color: "#555" }}>Email: superu@gmail.com</p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div
                                            className="flex h-10 w-10 items-center justify-center rounded"
                                            style={{ backgroundColor: "#212529", color: "#fff" }}
                                        >
                                            <FaRegClock className="h-6 w-6" />
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3
                                                className="mb-2 text-lg font-medium leading-6"
                                                style={{ color: "#212529" }}
                                            >
                                                Heures d'ouverture
                                            </h3>
                                            <p style={{ color: "#555" }}>
                                                Lundi - Vendredi: 08:00 - 17:00
                                            </p>
                                            <p style={{ color: "#555" }}>
                                                Samedi & Dimanche: 08:00 - 12:00
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="card h-fit max-w-6xl p-5 md:p-12"
                                id="form"
                                style={{
                                    backgroundColor: "#fff",
                                    borderRadius: "8px",
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                }}
                            >
                                <h2
                                    className="mb-4 text-2xl font-bold"
                                    style={{ color: "#212529" }}
                                >
                                    Prêt à commencer ?
                                </h2>

                                <form id="contactForm" onSubmit={handleModalSubmit}>
                                    <div className="mb-6">
                                        <div className="mx-0 mb-1 sm:mb-4">
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
                                        <label
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                            htmlFor="email"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="mail"
                                            id="email"
                                            placeholder="yannandronio@gmail.com"
                                            className="outline-none mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md"
                                            style={{ color: "#212529", backgroundColor: "#f5f5f5" }}
                                            name="email"
                                            onChange={handleChange}
                                            required
                                        />
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label
                                                htmlFor="textarea"
                                                className="block text-gray-700 text-sm font-bold mb-2"
                                                style={{ color: "#555" }}
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                id="textarea"
                                                name="textarea"
                                                onChange={handleChange}
                                                cols="30"
                                                rows="5"
                                                placeholder="Écrivez votre message..."
                                                className="outline-none mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md"
                                                style={{ color: "#212529", backgroundColor: "#f5f5f5" }}
                                                required
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className={`${s.send} flex justify-center items-center py-2 px-4 rounded-lg mt-4 w-full`}

                                        >
                                            Envoyer le message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* miala dom de miala izy */}
                <AnimatePresence>
                    {modalIsOpen && (
                        <motion.div
                            id="toast-simple"
                            className={`${s.Boxnotif} flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800`}
                            role="alert"
                            initial={{ x: "-100vw" }}
                            animate={{ x: "0" }}
                            exit={{ x: "-100vw" }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            <Lottie
                                animationData={message}
                                style={{ width: "20%" }}
                                loop={false}
                            />
                            <div className="text-orange-400 ps-4 text-sm font-bold">
                                Message envoyé avec succès.
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        </Fragment>
    );
}
