import React, { Component } from 'react';

import Login from "./views/login/login";
import Tabbar from "./components/tabbar/tabbar";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Login></Login>
          <Tabbar></Tabbar>
      </div>
    );
  }
}

export default App;
