import './styles.scss';

const ProductCard = (props) => {
    return (
        <div className="product-card">
            <div className="product-card__photo"
                 style={{background: `url(${props.photo})`}}></div>
            <div className="product-card__name">{props.name}</div>
            <div className="product-card__price">{props.price}</div>
        </div>
    );
};

export default ProductCard;