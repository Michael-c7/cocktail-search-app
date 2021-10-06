import React, { useState, useEffect, useContext } from 'react'
import Cocktail from './Cocktail'
import { AppContext } from './context'

/*
0.2. use user input in the url 
___
1. get data
2. set data to a state value
3. loop through data
4. pass values from data down to the cocktail detail component

*/

const Cocktails = () => {
    const {cocktailData} = useContext(AppContext)
    

    return (
        <section className="cocktail">
                <h2 className="cocktail__heading">Cocktails</h2>
                <ul className="cocktail__cards">
                    {console.log(cocktailData)}
                    <Cocktail/>
                </ul>
            </section>
    )
}

export default Cocktails
