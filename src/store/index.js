import { createStoreon } from 'storeon';

import { products } from './products';
import { cart } from './cart';
import { total } from './total';

const store = createStoreon([
    products,
    cart,
    total
]);

export default store;