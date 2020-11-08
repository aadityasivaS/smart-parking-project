import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Main from './Main';
import Book from './Book';
import Slot1 from './SlotsBooking/Slot1';
import Slot2 from './SlotsBooking/Slot2';
import Slot3 from './SlotsBooking/Slot3';
import Slot4 from './SlotsBooking/Slot4';
import UsersBookings from './UsersBookings';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/app" exact component={() => <Main />} />
          <Route path="/bookingStatus" exact component={() => <Book />} />
          <Route path="/slot1" exact component={() => <Slot1 />}/>
          <Route path="/slot2" exact component={() => <Slot2 />}/>
          <Route path="/slot3" exact component={() => <Slot3 />}/>
          <Route path="/slot4" exact component={() => <Slot4 />}/>
          <Route path="/my-bookings" exact component={() => <UsersBookings />}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;