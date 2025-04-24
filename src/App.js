import './App.css';
import { init } from 'emailjs-com';
import { initializeApp } from "firebase/app";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import NotFound from './pages/NotFound/NotFound';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import Study from './pages/Study/Study';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
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
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/projectDetails/:id" element={<ProjectDetails></ProjectDetails>} />
        <Route path="/study" element={<Study />}/>
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </Router>
  );
}

export default App;
