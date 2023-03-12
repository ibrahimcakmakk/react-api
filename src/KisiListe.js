import React, { Component } from "react";
import { Table, Spinner,} from "reactstrap";
//import Loading from "./Loading";

export default class KisiListe extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
        
    }
    
    
  render() {
    if (this.props.persons === []) {
     return(
      <div>
        <Spinner>Loading</Spinner>
      </div>
     ) 
    }else{
    return (
      <div>
        
        <Table bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {
            
            this.props.persons === [] ? <Spinner>Loading</Spinner> : this.props.persons.map(person => (
                <tr key = {person.id}>
                    <td >{person.id}</td>
                    <td>{person.name}</td>
                    <td>{person.username}</td>
                    
                </tr>
            ))}
            
           
          </tbody>
        </Table>
  
      </div>
    );
  }
}
}
