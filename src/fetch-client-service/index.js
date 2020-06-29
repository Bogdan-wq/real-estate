class FetchClient {

    _apiBase = 'https://api.jqestate.ru/v1/properties/country?pagination[offset]='


    getObjects = (offset) => {
        return fetch(`${this._apiBase}${offset}`)
            .then((res) => res.json())
            .then((res) => {
                const {items} = res;
                return items.map(this.transformObjects);
            })
    }


    transformObjects = (itemObject) => {
        const {
          id,
          images,
          location: {districtName,mkadDistance},
          saleOffer, rentOffer,
          landDetails : {area : totalArea},
          specification: {area : houseArea}
        } = itemObject;

        const {
            priceInUsdForSale,
            priceInUsdForRent
        } = this.transformSaleAndRent(saleOffer,rentOffer)

        return {id,images,districtName,mkadDistance,priceInUsdForSale,priceInUsdForRent,totalArea,houseArea}
    }


    transformSaleAndRent = (saleOffer,rentOffer) => {
        const priceInUsdForSale = saleOffer ? saleOffer.multiCurrencyPrice.usd : null;
        const priceInUsdForRent = rentOffer ? rentOffer.multiCurrencyPrice.usd : null;

        return {priceInUsdForSale,priceInUsdForRent}
    }
}


export default FetchClient;