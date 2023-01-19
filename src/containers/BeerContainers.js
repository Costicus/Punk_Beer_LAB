import React, {useState, useEffect} from 'react'
import BeerList from '../components/BeerList'
import BeerDetail from '../components/BeerDetail'
import SelectFavourite from '../components/SelectFavourite'
import DisplayFavourite from '../components/DisplayFavourite'

const BeerContainers = () => {
    const [beers, setBeers] = useState ([])
    const [selectedBeer, setSelectedBeer] = useState (null)
    const [selectedFavouriteBeer, setFavouriteBeer] = useState (null)
    const [favouriteList, setList] = useState ([])



    const onBeerClicked = function (beer) {
        setSelectedBeer (beer)
    }

    useEffect (() => {
        getBeers()
    }, [])

    const getBeers = function () {
        fetch ('https://api.punkapi.com/v2/beers')
        .then (response => response.json())
        .then (beers => setBeers(beers))
    }

    const onBeerSelected = function (beer) {
        setFavouriteBeer(beer)
        addBeer(beer)
    }

    const addBeer = function (beer) {
        const copyOfList = [...favouriteList, beer]
        setList (copyOfList)
    }

    return (
        <div className = "beer-container">
                <div>
                    <BeerList beers={beers} onBeerClicked={onBeerClicked}/>
                </div>
                <div>
                    {selectedBeer ? <BeerDetail beer = {selectedBeer}/> : null}
                </div>
                <div>
                    <SelectFavourite beers = {beers} onBeerSelected = {onBeerSelected}/>
                    {favouriteList ? <DisplayFavourite favBeers = {favouriteList}/> : null}

                </div>

        </div>
    )
}

export default BeerContainers
