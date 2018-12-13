import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import Template from './components/pages/Template';
import LoginPage from './components/pages/LoginPage';
import NotFound from './components/pages/NotFound';
import MarvelCharacterPage from './components/pages/MarvelCharacterPage/MarvelCharacterPage';
import MarvelCharacters from './components/pages/MarvelCharacters/MarvelCharacters';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/react_blog_project/main" component={MainPage} exact />
          <Route path="/react_blog_project/" component={MainPage} exact />
          <Route path="/react_blog_project/admin" component={MainPage} exact />
          <Route path="/template" component={Template} exact />
          <Route path="/react_blog_project/login" component={LoginPage} exact />
          <Route path="/react_blog_project/heroes/:id" component={MarvelCharacterPage} exact />
          <Route path="/react_blog_project/heroes/" component={MarvelCharacters} exact />
          <Route component={NotFound} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
