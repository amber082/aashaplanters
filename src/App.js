import './App.css';
import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Detail from './components/Detail'

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/gallery/:cat/:sub" component={Gallery}/>
          <Route exact path='/detail/:id' component={Detail}/>
        </Switch>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
