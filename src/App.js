import React, { Component } from "react";

import "./App.css";
import {BrowserRouter} from 'react-router-dom'

import Main from './Components/MainComponent'
class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <React.Fragment>
      <Main></Main>
       
      </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
