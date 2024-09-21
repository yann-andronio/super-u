import React, { Component, Fragment } from 'react';
import { CartProvider } from 'react-use-cart';
import "./tailwind.css";
import Routers from './routers/Routers';



class App extends Component {


  render() {
    return (
      <Fragment>

        <CartProvider>

          <Routers />

        </CartProvider>


      </Fragment>
    );
  }
}

export default App;
