import ShopHeader from '../../components/Shop/ShopHeader';
import ProductsList from '../../components/Shop/ProductsList';

import { useStoreon } from 'storeon/react';

const Hats = () => {
    const { dispatch, hats } = useStoreon('hats');
    return (
        <div className="shop-section">
            <ShopHeader />
            <ProductsList type="Hats" items={hats} />
        </div>
    );
};

export default Hats;