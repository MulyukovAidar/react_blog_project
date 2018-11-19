import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from "./components/pages/MainPage";
import Template from "./components/pages/Template";
import LoginPage from "./components/pages/LoginPage";
import NotFound from "./components/pages/NotFound";


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
                  <Route component={NotFound} exact/>
              </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
