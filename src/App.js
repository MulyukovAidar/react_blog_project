import React, { Component } from 'react';
import './App.css';
import Footer from './2-molecules/Footer';
import Navbar from './2-molecules/Navbar'
import Post from  './2-molecules/Post'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<p>*/}
            {/*Edit <code>src/App.js</code> and save to reload.*/}
          {/*</p>*/}
          {/*<a*/}
            {/*className="App-link"*/}
            {/*href="https://reactjs.org"*/}
            {/*target="_blank"*/}
            {/*rel="noopener noreferrer"*/}
          {/*>*/}
            {/*Learn React*/}
          {/*</a>*/}
        {/*</header>*/}
        <div className="posts"><Post/><Post/><Post/></div>

        <Footer/>
      </div>
    );
  }
}

export default App;
