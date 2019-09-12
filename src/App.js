import React,{Component} from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {StripeProvider} from 'react-stripe-elements';
class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/Checkout" component={Checkout}/>
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;

