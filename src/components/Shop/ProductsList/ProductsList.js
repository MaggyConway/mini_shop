import ProductCard from '../ProductCard';
import { useState } from 'react';
import './styles.scss';


const ProductsList = ({items, pageType}) => {

    const currentTypeItems = items.filter( (item) => {
        if (pageType === 'home') {
            return items;
        } else {
            return (item.type === pageType);
        }
    });

    let [cardsCounter, setCardsCounter] = useState(5);

    const cardStartView = currentTypeItems.slice(0, cardsCounter);

    const cardsTmpl = cardStartView.map( (item) => {
        const {id, name, price, photo, type} = item;
        return (
            <ProductCard
                key={id}
                id={id}
                photo={photo}
                name={name}
                price={price}
                type={type}
            />
        )
    });

    function show() {
        setCardsCounter(cardsCounter + 5);
    }

    return (
        <div className="products-list wrapper">
            <h1>{pageType}</h1>

            <div className="products-list--grid">
                {cardsTmpl}
            </div>

            { cardsCounter < currentTypeItems.length &&
                <button className="btn products-list__btn-more" onClick={show}>
                    show more</button>
            }     
        </div>
    );
};

export default ProductsList;