import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Landing } from './components/Landing';
import { Cart } from './components/Cart';
import { BillingInfo } from './components/BillingInfo';
import { Payment } from "./components/Payment";
import './styles/App.css';


const App = () => {
  return (
    <>
      <Router>
        <NavBar/>
          <Switch>
            <Route exact path="/payment" component={Payment}/>
            <Route exact path="/billing-info" component={BillingInfo}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/" component={Landing}/>
          </Switch>
          <Footer/>
      </Router>
    </>
  );
};

export default App;
