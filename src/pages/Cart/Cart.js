import './styles.scss';
import CartItem from '../../components/Shop/CartItem';
import { useStoreon } from 'storeon/react';

const Cart = ({cartTotal}) => {
    const { cart, products } = useStoreon('cart', 'products');
    
    const cartItems = cart.map( (cartItem) => {
        let itemByIdProps = {};
        products.find(obj => {
            if (obj.id === cartItem.id) {
                itemByIdProps = {
                    id: obj.id,
                    name: obj.name,
                    quantity: cartItem.quantity,
                    price: obj.price,
                    photo: obj.photo
                }
                return itemByIdProps;
            }
            return false;
        });

        return (
            <CartItem 
                key={itemByIdProps.id}
                id={itemByIdProps.id}
                name={itemByIdProps.name}
                price={itemByIdProps.price}
                quantity={itemByIdProps.quantity}
                photo={itemByIdProps.photo}
            />
        )
    });

    return (
        <div>
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
                    Total: ${cartTotal}
                </div>

                <button className="btn cart__checkout-btn">
                    CHECKOUT
                </button>
            </div>
        </div>
    );
};

export default Cart;