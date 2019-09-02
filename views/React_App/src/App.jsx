import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import Header from './components/Header';

//pages
import Shop from './layouts/shop/Shop';
import Products from './layouts/shop/Products';
import Cart from './layouts/shop/Cart';
import Orders from './layouts/shop/Orders';
import EditProduct from './layouts/admin/EditProduct';
import NoMatch404 from './layouts/NoMatch404';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home',
    };
    this.onPageChange = this.onPageChange.bind(this);
  }

  componentDidMount() {
    console.log('Mounted');
  }
  componentDidUpdate() {
    console.log('updated');
  }
  componentWillUnmount() {
    console.log('Unmounted');
  }

  onPageChange(page) {
    this.setState({ currentPage: page });
  }

  render() {
    const { currentPage } = this.state;
    const { onPageChange } = this;

    return (
      <div>
        <Router>
          <Header path={currentPage} />
          <Switch>
            <Route path="/" exact render={() => <Shop />} />
            <Route path="/products" render={() => <Products />} />
            <Route path="/cart" exact render={() => <Cart />} />
            <Route path="/orders" exact render={() => <Orders />} />
            <Route path="/admin/add-product" exact render={() => <EditProduct />} />
            <Route path="/admin/products" exact render={() => <Products />} />
            <Route component={NoMatch404} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
