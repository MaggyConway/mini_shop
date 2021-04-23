import ShopHeader from '../../components/Shop/ShopHeader';
import './styles.scss';

const Home = () => {
    return (
            <div>
                <ShopHeader />
                <div className="home">Это главная! Выберите раздел :)</div>
            </div>
    );
};

export default Home;