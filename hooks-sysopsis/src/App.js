import Displayusers from "./components/Displayusers";
import DisplayProducts from "./components/DisplayProducts";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{marginBottom: "25px"}}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link"> <Link  to="/">Products</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link"><Link  to="/users">Users</Link></a>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/users"> <Displayusers/></Route>
            <Route path="/" > <DisplayProducts/></Route>
          </Switch>
        </div>
      </Router>

  );
}

export default App;
