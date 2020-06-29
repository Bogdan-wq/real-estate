import React from 'react'
import './base-item.scss';
import landPicture from '../../images/farming-and-gardening.png';
import housePicture from '../../images/sydney-opera-house.png'

const BaseItem = ({baseItem}) => {

    const {images,districtName,mkadDistance,
        id,priceInUsdForSale,priceInUsdForRent,totalArea,houseArea} = baseItem;

    const onImageError = (e) => {
        e.target.src = 'https://via.placeholder.com/400/000000/FFFFFF/?text=DUMMY PICTURE'
    }

    const prettifyNumber = (price) => {
        return price.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')
    }

     const priceOfRentOrSale = priceInUsdForSale
         ? prettifyNumber(priceInUsdForSale)
         : prettifyNumber(priceInUsdForRent)


    return (
        <div className="own-card p-3">
            <div className="own-card__img">
                <img src={`https://images.jqestate.ru/${images[0].id}-jqestate-2048`}
                     onError={(e) => onImageError(e)}
                     alt="Card image" />
            </div>
            <span className="own-card__info d-block mt-3">
                Дом в посёлке &#8249;&#8249;{districtName}&rsaquo;&rsaquo;, {mkadDistance}км, ID {id}
            </span>
            <h4 className="font-weight-bold">${priceOfRentOrSale}</h4>
            <div className="d-flex">
                <div className="d-flex align-items-center">
                    <img src={landPicture} alt="Земля" />
                    <span className="own-card__totalarea ml-2">{totalArea} сот.</span>
                </div>
                <div className="d-flex align-items-center ml-4">
                    <img src={housePicture} alt="Дом" />
                    <span className="own-card__totalarea ml-2">{houseArea} м<sup>2</sup></span>
                </div>
            </div>
        </div>
    );
}

export default BaseItem;