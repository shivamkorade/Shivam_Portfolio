import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import React from "react";
// import ReactDOM from "react-dom";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import TimeLine from './components/TimeLine';
// import timelineElements from './components/timelineElements';

function App() {
  return (
    <div className="App">
      <title>My Portfolio</title>
      <NavBar />
      <Banner />
      <Skills />
      <TimeLine />
      <Projects />
      <Contact />
      <Footer />
     

    </div>
  );
}

export default App;
