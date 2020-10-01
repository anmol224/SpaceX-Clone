import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./HeaderComponent";
import Falcon from "./Falcon";
import Falconheavy from "./FHEAVY";
import Starship from "./Starship";
import Dragon from "./Dragon";
import Home from './Homecomponent'
import Footer from './Footer'
class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <Switch>
          <Route path='/home' component={Home}></Route>
          <Route exact path="/falcon9" component={Falcon}></Route>
          <Route exact path="/falheavy" component={Falconheavy}></Route>
          <Route exact path="/star" component={Starship}></Route>
          <Route exact path="/dragon" component={Dragon}></Route>
         <Redirect to='/home'></Redirect>
        </Switch>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}
export default Main;
