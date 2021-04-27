const CartItem = ({name, price, quantity, photo}) => {
    console.log(photo);
    return (
        <tr>
            <td>
                <div className="item_name">
                    <div style={{background: `url(../${photo}) no-repeat center center`}}
                        className="item_photo"></div>                              
                    {name}
                </div>
            </td>
            <td>
                <div className="item_price">{price}</div>
            </td>
            <td>
                <div className="item_q"><input type="number" min="1" defaultValue={quantity} /></div>
            </td>
            <td>
                <div className="item_delete">X</div>
            </td>
        </tr>
    );
}

export default CartItem;