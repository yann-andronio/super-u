import React, { Fragment, useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import HeaderDown from '../../components/headerDown/HeaderDown';
import CategorieMenu from '../../components/categorieMenu/CategorieMenu';
import Card from '../../components/card/Card';
import Carddata from '../../data/Carddata';
import s from "./home.module.css";
import Footers from '../../components/footers/Footers';
import SearchResult from '../../components/searchresult/SearchResult';
import Filter from 'react-filter-search';
import Service from '../../components/servicess/Service';
import Pub from '../../components/pub/Pub';
import { Element } from 'react-scroll';
import Bestsell from '../../components/Bestsell/Bestsell';
import Promotion from '../../components/promotion/Promotion';
import Lottie from 'lottie-react';
import message from "../../Lotties/5.json";
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from 'react-use-cart';

export default function Home() {
    const [catname, setCatname] = useState('');
    const [categorieActive, setCategorieActive] = useState("Tout");
    const [filteredCarddatas, setFilteredCarddatas] = useState(Carddata);
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const { totalItems, addItem } = useCart();

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleModalSubmit = () => {
        setModalIsOpen(true);

        setTimeout(() => {

            setModalIsOpen(false);
        }, 2200);
    };

    useEffect(() => {
        const filteredData = Carddata.filter(item =>
            item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            item.categorie.toString().includes(searchInput)
        );
        setSearchResults(filteredData);
    }, [searchInput]);



    const handleSearchInput = (e) => {

        setSearchInput(e.target.value);
        const element = document.getElementById('produitderecherche');
        if (element) {

            element.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        }
    };

    const filterByCategorie = (categorie) => {
        const filteredCardItems = Carddata.filter(item => item.categorie === categorie);
        setCategorieActive(categorie === "Tout" ? "Tout" : categorie);
        setFilteredCarddatas(categorie === "Tout" ? Carddata : filteredCardItems);
    };



    
    const handleCategorieClick = (itemCategorie, itemname) => {
        const newCategorie = categorieActive === itemCategorie ? "Tout" : itemCategorie;
        setCategorieActive(newCategorie);
        filterByCategorie(newCategorie);
        setCatname(itemname);
    };


    
    return (
        <Fragment>
            <Header handleSearchInput={handleSearchInput} />
            <main className={` mt-5 px-5`}>
                <Element name="menu">
                    <HeaderDown />

                </Element>

                <Service />

                <Element name="categorie">
                    <CategorieMenu
                        categorieActive={categorieActive}
                        handleCategorieClick={handleCategorieClick}
                    />
                </Element>

                {categorieActive !== 'Tout' ? <h1 className={`text-2xl font-semibold `}>{catname}</h1> : <h1 className={`text-2xl font-semibold `}>TOUT</h1>}
                <Card carddatas={filteredCarddatas} handleModalSubmit={handleModalSubmit} addItem={addItem} />

                <Element name="contact">
                    <div className={`${s.publiciter} px-8 py-20`}>
                        <Pub />
                    </div>
                </Element>

                <Element name="about">
                    <div className={`${s.bestsell}`}>
                        <h1 className={`text-2xl font-semibold `}>Meilleur Vente</h1>
                        <Bestsell handleModalSubmit={handleModalSubmit} addItem={addItem} />
                    </div>
                </Element>

                <Element name="promotion">
                    <div className={`${s.Promotion}`}>
                        <h1 className={`text-2xl font-semibold `}>Offres exclusives</h1>
                        <Promotion handleModalSubmit={handleModalSubmit} addItem={addItem} />
                    </div>
                </Element>

                <Element id="produitderecherche" name="produitderecherche">
                    <div className={`${s.rechercheresult}`}>
                        <h1 className={`text-2xl font-semibold `}>Produits de recherche</h1>

                        <Filter
                            value={searchInput}
                            data={Carddata}
                            renderResults={() => <SearchResult searchResults={searchResults} handleModalSubmit={handleModalSubmit} addItem={addItem} />}
                        />

                    </div>
                </Element>

                <AnimatePresence>
                    {modalIsOpen && (
                        <motion.div
                            id="toast-simple"
                            className={`${s.Boxnotif} flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800`}
                            role="alert"
                            initial={{ x: '100vw' }}
                            animate={{ x: '0' }}
                            exit={{ x: '100vw' }}
                            transition={{ duration: 0.6, ease: 'easeInOut' }}
                        >
                            <Lottie animationData={message} style={{ width: "10%" }} loop={false} />
                            <div className="text-orange-400 ps-4 text-sm font-bold"> {totalItems} Article ajouté au panier</div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </main>

            <div className={`${s.footer}`}>
                <Footers />
            </div>
        </Fragment>
    );
}
