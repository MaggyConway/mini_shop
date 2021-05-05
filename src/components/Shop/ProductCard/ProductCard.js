import './styles.scss';
import { useStoreon } from 'storeon/react';

const ProductCard = ({id, photo, name, price}) => {
    
    const { dispatch } = useStoreon('cart');
    return (
        <div className="product-card">
            <div className="product-card__photo"
                 style={{background: `url(${photo})`}}></div>
            <div className="product-card__name">{name}</div>
            <div className="product-card__price">${price}</div>
            <div className="product-card__wrap">
                <button className="btn product-card__buy-btn"
                        onClick={ () => { dispatch('cart/add', {'id' : id, 'quantity' : 1}); } }>buy</button>
            </div>
        </div>
    );
};

export default ProductCard;