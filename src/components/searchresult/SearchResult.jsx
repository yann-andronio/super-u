import React from 'react'
import s from "./searchresult.module.css"
import Cardresult from '../cardsresult/Cardresult';

export default function SearchResults({ searchResults ,  handleModalSubmit , addItem }) {
    return (
        <div>
            {searchResults.length === 0 ? (
                <h1>Aucun résultat trouvé</h1>
            ) : (
                <div className={`${s.card_list} `}>
                    {searchResults.map((item, index) => (
                        <Cardresult item={item} key={index}  handleModalSubmit={handleModalSubmit} addItem={addItem} />
                    ))}
                </div>
            )}
        </div>
    );
}

