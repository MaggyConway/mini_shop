import { Switch, Route } from 'react-router-dom';
import store from './store';
import { StoreContext } from 'storeon/react';

// import Counter from './components/Counter';
import Home  from './pages/Home';
import Bags  from './pages/Bags';
import Shoes from './pages/Shoes';
import Hats  from './pages/Hats';
import Cart from './pages/Cart';

function App() {
  return (
    <StoreContext.Provider value={store}>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/bags' component={Bags} />
          <Route path='/shoes' component={Shoes} />
          <Route path='/hats' component={Hats} />
          <Route path='/cart' component={Cart} />
        </Switch>
      </div>
    </StoreContext.Provider>
  );
}

export default App;