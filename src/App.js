import { Container } from "reactstrap";
import axios from "axios";
import "./App.css";
import KisiListe from "./KisiListe";

import React, { Component } from "react";

class App extends Component {
  
 

  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    };
  }
  kisiGetir(){
    axios
      .get("https://jsonplaceholder.typicode.com/users").then(res => {
        let persons = res.data;
        this.setState({ persons });
      })
  }
  componentDidMount(){
    this.kisiGetir();
  }

  render() {
    

    return (
      <div>
        <Container>
          <KisiListe persons={this.state.persons}  />
        </Container>
      </div>
    );
  }
}

export default App;
