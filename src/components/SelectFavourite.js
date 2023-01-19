import FavouriteOption from "./FavouriteOption"

const BeerSelector = ({beers, onBeerSelected}) => {
    const handleChange = function (event) {
        const chosenBeer = beers[event.target.value - 1]
        // console.log(chosenBeer)
        onBeerSelected (chosenBeer)
    }
    const beerOptions = beers.map((beer, index) => {
        return <FavouriteOption key = {beer.id} beerName = {beer.name} beerID= {beer.id}/>
    })
    return (
        <select defaultValue = "" onChange = {handleChange}>
            <option value="" selected >Select your favourite beer!</option>
            {beerOptions}
        </select>
    )
}

export default BeerSelector
