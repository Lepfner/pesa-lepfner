import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
import Destinations from './pages/DestinationsList';

import Navbar from './components/Navbar';
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Navbar />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
                <Route exact path="/destinations">
                    <Destinations />
                </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
