import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>  
      <Route exact path="/">
            <Home/>
          </Route>
      <Route exact path="/products">
           <Products/>
          </Route>
      <Route exact path="/products/:id">
           <SingleProduct/>
          </Route>
      <Route exact path="/cart">
           <Cart/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
