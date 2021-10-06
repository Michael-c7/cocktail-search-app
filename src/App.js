import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './Navbar'
import Search from './Search'
import Cocktails from './Cocktails'
import CocktailDetails from "./CocktailDetails"
import About from "./About"
import Error from "./Error"
import { AppContext } from './context'
import Loading from "./Loading"
// replace a tag w/ Link when we start to use react router
const App = () => {
    const { loading } = useContext(AppContext);

    return (
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <Search/>
                        <Cocktails/>
                        
                    </Route>

                    <Route path="/about">
                        <About/>
                    </Route>

                    <Route path="*">
                        <Error/>
                    </Route>

                    <Route path="/cocktail/:id" children={<CocktailDetails/>}></Route>
                    
                    
                </Switch>
            </Router>   
    )
}

export default App
