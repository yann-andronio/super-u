import React, { Fragment } from 'react';
import s from "./categorieMenue.module.css";
import Categoriedata from "../../data/Categoriedata";

export default function CategorieMenu({ categorieActive, handleCategorieClick }) {
    const categoriedatas = Categoriedata;

    return (
        <Fragment>
            <div className={`${s.explore_menu}`}>
                <div className={`${s.Tittlecategorie} flex flex-col items-center justify-center `}>

                    <h1 className={`${s.LittleTittle} text-2xl font-semibold  py-4`}>Magasiner par catégorie</h1>
                    <p className={`${s.text} flex justify-center text-lg   text-gray-600`}>
                        visitez notre boutique pour voir des produits incroyables
                    </p>
                </div>
                <div className={`${s.categorie_list} d-flex py-11`}>
                    {
                        categoriedatas.map((item, index) => (
                            <div className={`${s.categorie_sary_text} d-flex flex-column align-items-center  gap-8    justify-content-center`} key={index}>
                                <div onClick={() => handleCategorieClick(item.categorie, item.name)} className={` ${s.sarycat} d-flex align-items-center justify-content-center   shadow-lg rounded-lg`}>
                                    <img
                                        className={`${categorieActive === item.categorie ? s.active : s.non_active}`}
                                        src={`image/categorie/${item.sary}.png`}
                                        alt=""
                                    />
                                </div>
                                <div className={`${s.namee}`}>
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Fragment>
    );
}
