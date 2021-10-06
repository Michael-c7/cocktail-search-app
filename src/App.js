import React from 'react'


// replace a tag w/ Link when we start to use react router
const App = () => {
    return (
        <>
            <nav className="navbar">
                <a>
                <img src="https://react-projects-15-cocktails.netlify.app/static/media/logo.9a3d2645.svg" alt=""/>
                </a>
            
                <ul className="navbar__links">
                    <li className="navbar__link"><a>Home</a></li>
                    <li className="navbar__link"><a>About</a></li>
                </ul>
            </nav>

            <section className="search">
                <h2 class="search__heading">Search Your Favorite Cocktail</h2>
                <input className="search__input" placeholder="Eg: A1" autoFocus/>
            </section>

            <section className="cocktail">
                <h2 className="cocktail__heading">Cocktails</h2>
                <ul className="cocktail__cards">
                    <li className="cocktail__card">
                        <img className="card__img" src="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg" alt=""/>
                        <h2 className="card__name">A1</h2>
                        <h3 className="card__glass-type">cocktail glass</h3>
                        <h4 className="card__type">Alcoholic</h4>
                        <button className="card__details-btn"><a>Details</a></button>
                    </li>

                    <li className="cocktail__card">
                        <img className="card__img" src="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg" alt=""/>
                        <h2 className="card__name">A1</h2>
                        <h3 className="card__glass-type">cocktail glass</h3>
                        <h4 className="card__type">Alcoholic</h4>
                        <button className="card__details-btn"><a>Details</a></button>
                    </li>

                    <li className="cocktail__card">
                        <img className="card__img" src="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg" alt=""/>
                        <h2 className="card__name">A1</h2>
                        <h3 className="card__glass-type">cocktail glass</h3>
                        <h4 className="card__type">Alcoholic</h4>
                        <button className="card__details-btn x"><a>Details</a></button>
                    </li>

                    <li className="cocktail__card">
                        <img className="card__img" src="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg" alt=""/>
                        <h2 className="card__name">A1</h2>
                        <h3 className="card__glass-type">cocktail glass</h3>
                        <h4 className="card__type">Alcoholic</h4>
                        <button className="card__details-btn"><a>Details</a></button>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default App
