const Beers = ({beerName, beer, onBeerClicked}) => {

    const handleClick = function () {
        onBeerClicked(beer)
    }

    return (
            <li onClick={handleClick}>
                <p>{beerName}</p>
            </li>
    )
}

export default Beers
