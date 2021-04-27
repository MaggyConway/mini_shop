import ProductCard from '../ProductCard';

import { useState } from 'react';

import './styles.scss';

const ProductsList = ({type, items}) => {

    let [cardsCounter, setCardsCounter] = useState(5);

    const cardStartView = items.slice(0, cardsCounter);
    
    // console.log(items);

    const cardsTmpl = cardStartView.map( (item) => {
        const {id, name, price, photo} = item;
        return (
            <ProductCard
                key={id}
                photo={photo}
                name={name}
                price={price}
            />
        )
    });

    function show() {
        setCardsCounter(cardsCounter + 5);
    }


    return (
        <div className="products-list wrapper">
            <h1>{type}</h1>

            <div className="products-list--grid">
                {cardsTmpl}
            </div>

            { cardsCounter < items.length &&
                <button className="btn products-list__btn-more" onClick={show}>show more</button>
            }
                    
        </div>
    );
};

export default ProductsList;