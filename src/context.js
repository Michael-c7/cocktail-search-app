import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

const AppProvider = ({children}) => {
    const [userInput, setUserInput] = useState("");
    const [cocktailData, setCocktailData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    const fetchCocktails = async _ => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setIsLoading(false)
            setCocktailData(data)
        } catch(error) {
            setIsLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCocktails()
    }, [userInput])



    return (
        <AppContext.Provider 
            value={{userInput, setUserInput}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider};
