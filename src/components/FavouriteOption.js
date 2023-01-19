const FavouriteOption = ({beerName, beerID}) => {
    console.log(beerName)
    return <option value = {beerID}>{beerName}</option>
}

export default FavouriteOption
