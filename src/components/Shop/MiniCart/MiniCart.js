import { Link } from 'react-router-dom';
import './styles.scss';

const MiniCart = () => {
    return (
        <div className="header__mini-cart">
            <span className="header__mini-cart__quantity">1 items</span>
            <span>&nbsp;/&nbsp;</span>
            <span className="header__mini-cart__price">100$</span>
            <Link to='/cart'><span className="header__mini-cart__icon"></span></Link>
        </div>
    );
};

export default MiniCart;