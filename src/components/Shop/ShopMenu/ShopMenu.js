import { Link } from 'react-router-dom';
import './styles.scss';

const ShopMenu = () => {
    return (
        <ul className="menu">
            <li>
                <Link to='/bags'>bags</Link>
            </li>
            <li>
                <Link to='/shoes'>shoes</Link>
            </li>
            <li>
                <Link to='/hats'>hats</Link>
            </li>
        </ul>
    );
};

export default ShopMenu;