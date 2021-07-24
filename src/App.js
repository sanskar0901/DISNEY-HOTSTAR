import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
 
} from "react-router-dom";






import Banner from './components/Body/Banner/Banner'
import Navbar from './components/Navbar/Navbar.jsx'
import './App.css';


function App() {
  return (
    <div className="App">
     
     <Navbar/>
     <Banner/>
     <Router>
       <Switch>
          <Route  path="/">
          
        
          </Route>
          <Route exact path="/about">
            
          </Route>
          <Route exact path="/dashboard">
            
          </Route>
        </Switch>
     </Router>

     
    </div>
  );
}

export default App;
