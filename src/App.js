import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDisplay from "./pages/ProjectDisplay";
import Experience from './pages/Experience';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import "./styles/App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact={true} path="/" >
            <Home />
          </Route>
          <Route exact={true} path="/projects" >
            <Projects />
          </Route>
          <Route path="/projects/:id">
            <ProjectDisplay />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
