import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from "./5-pages/MainPage";
import Template from "./5-pages/Template";
import LoginPage from "./5-pages/LoginPage";


class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
              <Switch>
                  <Route path="/main" component={MainPage} exact/>
                  <Route path="/" component={MainPage} exact/>
                  <Route path="/admin" component={MainPage} exact/>
                  <Route path="/template" component={Template} exact/>
                  <Route path="/login" component={LoginPage}/>
              </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
