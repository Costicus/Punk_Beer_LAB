import React, {useState, useEffect} from 'react'
import Beers from './Beers.js'


const BeerList = ({beers, onBeerClicked}) => {

    const beersList = beers.map((beer) => {
        const i=beer.id-1
        return <Beers beerName = {beer.name} key = {i} beer = {beer} onBeerClicked = {onBeerClicked}/> 
    })

    return (
        <ul>
            {beersList}
        </ul>
    )
}

export default BeerList
