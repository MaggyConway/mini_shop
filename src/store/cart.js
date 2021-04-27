import photoHat from '../assets/images/hats/hat1.jpg';
import photoShoe from '../assets/images/shoes/shoe1.jpg';
import photoBag from '../assets/images/bags/bag1.png';

export function cart (store) {
    store.on('@init', () => ({ 
      cart: [
        {
          id: 2,
          name: 'hat2',
          price: '$111',
          quantity: 1,
          photo: photoHat
        },
        {
          id: 14,
          name: 'shoe14',
          price: '$29',
          quantity: 2,
          photo: photoShoe
        }
      ],
    }));
  
    // store.on('cart/add', ({ cart }, cartitem) => {
    //   return { cart: cart.concat([cartitem]) }
    // });
};

export default cart;