import './App.css';
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/gallery/:cat/:sub" component={Gallery}/>
          <Route path='/detail/:id' component={Detail}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
