import React, { useContext } from 'react'
import { Link } from "react-router-dom"

// useContext(AppContext)

const Cocktail = () => {
    

    return (
        <li className="cocktail__card">
            <img className="card__img" src="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg" alt=""/>
            <div className="card__info">
                <h2 className="card__name">A1</h2>
                <h3 className="card__glass-type">cocktail glass</h3>
                <h4 className="card__type">Alcoholic</h4>
                <button className="card__details-btn"><Link to={`/cocktail/:id`}>Details</Link></button>
            </div>
        </li>
    )
}

export default Cocktail
