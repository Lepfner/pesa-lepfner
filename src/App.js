//Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
import Destinations from './pages/DestinationsList';
import ConstructionList from "./pages/ConstructionList";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Destination from "./pages/Destination";
import Construction from "./pages/Construction";
import Partners from "./pages/Partners";

function App() {
  return (
    <div className="overflow-x-hidden w-full">
      <Router>
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
          <Route exact path="/partners">
            <Partners />
          </Route>
          <Route exact path="/construction-list">
            <ConstructionList />
          </Route>
          <Route path="/destinations/:slug">
            <Destination />
          </Route>
          <Route path="/construction/:slug">
            <Construction />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;