import ShopHeader from '../../components/Shop/ShopHeader';
import ProductsList from '../../components/Shop/ProductsList';
// import './styles.scss';

const Bags = () => {
    return (
        <div className="shop-section">
            <ShopHeader />
            <ProductsList type="Bags" />
        </div>
    );
};

export default Bags;