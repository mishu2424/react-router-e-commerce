import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Notfound from './components/Notfound/Notfound';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Orderreview from './components/Orderreview/Orderreview';

function App() {
  return (
    <div>
     <Router>
       <Header></Header>
       <Switch>
         <Route exact path="/">
           <Shop></Shop>
         </Route>
         <Route path="/home">
           <Home></Home>
         </Route>
         <Route path="/shop">
           <Shop></Shop>
         </Route>
         <Route path="/review">
           <Review></Review> 
          </Route>   
          <Route path="/orderreview">
            <Orderreview></Orderreview>
          </Route>
          <Route exact path="*">
            <Notfound></Notfound>
          </Route>
      </Switch>   
    </Router>     
    </div>
  );
}

export default App;
