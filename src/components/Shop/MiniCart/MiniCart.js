import { Link } from 'react-router-dom';
import './styles.scss';

const MiniCart = ({cartTotal, allQuantity}) => {
    return (
        <div className="header__mini-cart">
            <span className="header__mini-cart__quantity">{allQuantity} items</span>
            <span>&nbsp;/&nbsp;</span>
            <span className="header__mini-cart__total">${cartTotal}</span>
            <Link to='/cart'><span className="header__mini-cart__icon"></span></Link>
        </div>
    );
};

export default MiniCart;