export function cart (store) {
    store.on('@init', () => ({ 
      cart: [],
    }));
  
    store.on('cart/add', ({ cart }, product) => {
      const addCartArr = [...cart];
      let found = addCartArr.some(el => el.id  === product.id);
      if (found) {
        let double = product.id;
        addCartArr.forEach(el => {
          if (el.id === double) {
            el.quantity += 1;
          }
        });

        return { cart: addCartArr }

      } else {
        return { cart : [...cart, product] }
      }
    });

    store.on('cart/delete', ({ cart }, productId) => {
      let toDeleteArr = cart.filter(cartItem => cartItem.id !== productId);
      return {
        cart: toDeleteArr
      }
    });

    store.on('cart/quantity', ({ cart }, product) => {
      const arr = [...cart];
      arr.forEach(el => {
        if (el.id === product.id) {
          el.quantity = product.quantity;
        }
      });
      return { cart : [...arr] } 
    });
};

export default cart;