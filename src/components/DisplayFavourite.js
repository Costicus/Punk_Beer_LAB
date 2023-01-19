import FavouriteBeers from "./FavouriteBeers"

const DisplayFavourite = ({favBeers}) => {
    
    const JSXListOfFavBeers = favBeers.map((beer, index) => {
        return <FavouriteBeers beerName = {beer.name} key = {beer.id-1}/>
    })

    return (
        <div>
            <ul>
                {JSXListOfFavBeers}
            </ul> 
        </div>
    )
}

export default DisplayFavourite
