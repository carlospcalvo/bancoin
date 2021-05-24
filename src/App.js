import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Landing } from './components/Landing';
import { BillingInfo } from './components/BillingInfo'

const App = () => {
  return (
    <>
      <NavBar/>

        <Router>
            <Switch>


              <Route exact path="/billing-info" component={BillingInfo}/>
              <Route exact path="/" component={Landing}/>
            </Switch>
        </Router>
      <Footer/>
    </>
  );
}

export default App;
