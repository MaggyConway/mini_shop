import ShopHeader from '../../components/Shop/ShopHeader';
import './styles.scss';

import { useStoreon } from 'storeon/react';

import CartItem from '../../components/Shop/CartItem';



const Cart = () => {
    const { dispatch, cart } = useStoreon('cart');
    
    const cartItems = cart.map( (item) => {
        const {id, name, price, quantity, photo} = item;
        return (
            <CartItem 
                key={id}
                name={name}
                price={price}
                quantity={quantity}
                photo={photo}
            />
        )
    });
    // console.log(cart);
    return (
        <div>
            <ShopHeader />
            <div className="wrapper cart">
                <h1>Cart</h1>

                <table className="cart__products-table">
                    <thead>
                        <tr>
                            <td><div>Product</div></td>
                            <td><div>Price</div></td>
                            <td><div>Quantity</div></td>
                            <td><div></div></td>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems}
                    </tbody>
                </table>
            
                <div className="cart__total">
                    Total: 300$
                </div>

                <button className="cart__checkout-btn">
                    CHECKOUT
                </button>
            </div>
        </div>
    );
};

export default Cart;