import React from 'react';
import Timer from './components/timer'
import Header from './components/header'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import AboutMe from './pages/aboutme'
import PhotoMe from './pages/photome'


import { Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import "./assets/sass/main.scss";

function App() {

  const renderRoute = () => {
    return (
      <Switch>
        <Route exact path='/about' component={AboutMe} />
        <Route exact path='/photo' component={PhotoMe} />
        {/* <Route exact path='/' component={} />
        <Route exact path='/' component={} />
        <Route exact path='/' component={} /> */}
      </Switch>
    )
  }
  return (
    <>
    <Header />
      <BrowserRouter>
        {/* Sidebar */}
        <section className="sidebar d-inline-block">
          <div className="text-center">
            <img src="/logo.png" className="App-logo w-50 text-center" alt="logo" />
            <img src="/public/1.jpg" alt="haha" />
          </div>
          <ul>
            <li><h2 itemProp="name">Tường.8bit</h2></li>
            <li><p itemProp="jobtitle">Web Developer</p></li>
            <li><p itemProp="work">Monstar Lab</p></li>
            <li><Link to='/about' >to About</Link></li>
            <li><Link to='/photo' >to Photo</Link></li>
            <li><Timer /></li>
          </ul>
        </section>

        {renderRoute()}
      </BrowserRouter>
    </>
  );
}

export default App;
