import './App.css';
import About from './pages/About/About';
import Banner from './pages/Banner/Banner';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import { init } from 'emailjs-com';
import { initializeApp } from "firebase/app";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import NotFound from './pages/NotFound/NotFound';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
const firebaseConfig = {
  apiKey: "AIzaSyBwlr09kH1CMW4X_mofe-vaWeVHmUclCeY",
  authDomain: "my-portfolio-80b66.firebaseapp.com",
  projectId: "my-portfolio-80b66",
  storageBucket: "my-portfolio-80b66.appspot.com",
  messagingSenderId: "984376982014",
  appId: "1:984376982014:web:6f621615f1471d4a23a8af"
};
const app = initializeApp(firebaseConfig);
init("user_UDPjpjTCty7OiqgJruKyI");

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/blogs">
          <Blogs></Blogs>
        </Route>
        <Route path="/projectDetails/:id">
          <ProjectDetails></ProjectDetails>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
