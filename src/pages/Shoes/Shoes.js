import ShopHeader from '../../components/Shop/ShopHeader';
import ProductsList from '../../components/Shop/ProductsList';

import { useStoreon } from 'storeon/react';

const Shoes = () => {
    const { dispatch, shoes } = useStoreon('shoes');
    return (
        <div className="shop-section">
            <ShopHeader />
            <ProductsList type="Shoes" items={shoes} />
        </div>
    );
};

export default Shoes;