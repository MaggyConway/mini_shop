import ShopHeader from '../../components/Shop/ShopHeader';
import './styles.scss';
import item_photo1 from '../../assets/images/shoes.jpg';
import item_photo2 from '../../assets/images/bags.png';

const Cart = () => {
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
                        <tr>
                            <td>
                                <div className="item_name">
                                    <div style={{background: `url(${item_photo1}) no-repeat center center`}}
                                        className="item_photo"></div>                              
                                    Item
                                </div>
                            </td>
                            <td>
                                <div className="item_price">100$</div>
                            </td>
                            <td>
                                <div className="item_q"><input type="number" min="1" defaultValue="1" /></div>
                            </td>
                            <td>
                                <div className="item_delete">X</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <div className="item_name">
                                <div style={{background: `url(${item_photo2}) no-repeat center center`}}
                                    className="item_photo"></div>                              
                                Item
                            </div>
                            </td>
                            <td>
                                <div className="item_price">200$<span>100$ per item</span></div>
                            </td>
                            <td>
                                <div className="item_q"><input type="number" min="1" defaultValue="2" /></div>
                            </td>
                            <td>
                                <div className="item_delete">X</div>
                            </td>
                        </tr>
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