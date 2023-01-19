const BeerDetail = ({beer}) => {
    
    // console.log(beer.name)

    return (
        <div>
            <ul>
                <li>
                    <p>{beer.name}</p>
                    <p>{beer.description}</p>
                    <p>{beer.abv}</p>
                </li>
            </ul> 
        </div>
    )
}

export default BeerDetail
