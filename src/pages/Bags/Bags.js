import ShopHeader from '../../components/Shop/ShopHeader';
import ProductsList from '../../components/Shop/ProductsList';

import { useStoreon } from 'storeon/react';

const Bags = () => {
    const { dispatch, bags } = useStoreon('bags');
    return (
        <div className="shop-section">
            <ShopHeader />
            <ProductsList type="Bags" items={bags} />
        </div>
    );
};

export default Bags;