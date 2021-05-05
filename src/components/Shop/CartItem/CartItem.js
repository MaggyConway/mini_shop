import { useStoreon } from 'storeon/react';

const CartItem = ({id, name, price, quantity, photo}) => {

    const { dispatch } = useStoreon('cart');

    function changeQ(e) {
        quantity = e.target.value;
        dispatch('cart/quantity', 
        {
            'id' : id, 
            'quantity' : quantity
        });
    }

    return (
        <tr className="cart-item">
            <td>
                <div className="item_name">
                    <div style={{background: `url(../${photo}) no-repeat center center`}}
                        className="item_photo"></div>                              
                    {name}
                </div>
            </td>
            <td>
                <div className="item_price">$<p>{price}</p></div>
            </td>
            <td>
                <div className="item_q">
                    <input type="number" min="1"
                        defaultValue={quantity} 
                        onChange={ changeQ }
                        />
                </div>
            </td>
            <td>
                <div className="item_delete">
                    <span onClick={ () => { dispatch('cart/delete', id) } }>X</span>
                </div>
            </td>
        </tr>
    );
}

export default CartItem;