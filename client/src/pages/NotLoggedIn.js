import React, { Component } from "react";
// import SearchBar from "../components/Recipes/SearchBar";
import Recipes from "../components/Recipes";
import WelcomeHeader from "../components/WelcomeHeader";
import Articles from "../components/Articles";
import Container from "react-materialize/lib/Container";
import './style.css';

class NotLoggedIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  componentDidMount() {
    console.log('mounted');
    console.log('not logged in state ' + this.state);
  }
 
  render() {
    return (
        <Container className="notLoggedInPage mx-auto">
            <WelcomeHeader/>
            <Recipes/>
            <Articles />
        </Container>
    )
  };
};

export default NotLoggedIn;