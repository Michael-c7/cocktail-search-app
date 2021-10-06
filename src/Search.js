import React, {useRef, useContext} from 'react'
import {AppContext} from "./context"


const Search = () => {
    const {userInput, setUserInput} = useContext(AppContext)

    const inputRef = useRef(null)
    const getInput = _ => setUserInput(inputRef.current.value)

    return (
        <section className="search">
            <h2 className="search__heading">Search Your Favorite Cocktail</h2>
            <input className="search__input" onKeyDown={getInput} ref={inputRef} placeholder="Eg: A1" autoFocus/>
        </section>
    )
}

export default Search;
