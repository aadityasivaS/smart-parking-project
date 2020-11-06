import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Main from './Main';
import Book from './Book';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/app" exact component={() => <Main />} />
          <Route path="/bookingStatus" exact component={() => <Book />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;