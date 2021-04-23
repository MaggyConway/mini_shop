import ShopHeader from '../../components/Shop/ShopHeader';
import ProductsList from '../../components/Shop/ProductsList';
import './styles.scss';

const Hats = () => {
    return (
        <div className="shop-section">
            <ShopHeader />
            <ProductsList type="Hats" />
        </div>
    );
};

export default Hats;