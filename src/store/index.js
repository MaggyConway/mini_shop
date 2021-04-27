import { createStoreon } from 'storeon';

import { bags } from './bags';
import { shoes } from './shoes';
import { hats } from './hats';
import { cart } from './cart';

const store = createStoreon([
    bags,
    shoes,
    hats,
    cart
]);

export default store;