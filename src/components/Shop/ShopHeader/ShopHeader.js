import { Link } from 'react-router-dom';
import logopath from '../../../assets/images/logo.svg';
import MiniCart from '../MiniCart';
import ShopMenu from '../ShopMenu';
import './styles.scss';

const ShopHeader = ({cartTotal, allQuantity}) => {
    return (
        <header className="wrapper">
            <div className="header--left">
                <Link to='/'><img src={logopath} alt="shop_logo" /></Link>
                <ShopMenu />
            </div>
            <MiniCart cartTotal={cartTotal} allQuantity={allQuantity} />
        </header>
    );
};

export default ShopHeader;