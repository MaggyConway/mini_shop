import ShopHeader from '../../components/Shop/ShopHeader';
import ProductsList from '../../components/Shop/ProductsList';
import './styles.scss';

const Shoes = () => {
    return (
        <div className="shop-section">
            <ShopHeader />
            <ProductsList type="Shoes" />
        </div>
    );
};

export default Shoes;