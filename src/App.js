import { Switch, Route } from 'react-router-dom';
import ShopHeader from './components/Shop/ShopHeader';
import Products  from './pages/Products';
import Cart from './pages/Cart';
import { useStoreon } from 'storeon/react';
import { useEffect, useState } from 'react';
import './index.scss';

function App() {

  const [total, setTotal] = useState(0);
  const [totalQ, setTotalQ] = useState(0);
  const { cart, products } = useStoreon('cart', 'products');

  useEffect(() => {
      let sumPrices = 0;
      let sumQ = 0;

      cart.forEach(el => {
        products.find(obj => {
          if (obj.id === el.id) {
            const quantity = el.quantity;
            const price = obj.price;
            sumPrices += quantity * price;
            return sumPrices;
          }
          return false;
        })
        sumQ += Number(el.quantity);
      });
      setTotalQ(sumQ);
      setTotal(sumPrices);
  }, [cart, products]);

  return (
      <div className="App">
        <ShopHeader cartTotal={total} allQuantity={totalQ} />
        <Switch>
          <Route exact path='/'>
            <Products pageType="home" />
          </Route>
          <Route path='/bags'>
            <Products pageType="bags" />
          </Route>
          <Route path='/shoes'>
            <Products pageType="shoes" />
          </Route>
          <Route path='/hats'>
            <Products pageType="hats" />
          </Route>
          <Route path='/cart'>
            <Cart cartTotal={total} />
          </Route>
        </Switch>
      </div>
  );
}

export default App;