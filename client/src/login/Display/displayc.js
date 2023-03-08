import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Signup from "../signup";
class View extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://localhost:8080/hi/get')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}
deleteData(id, e){  
  axios.delete("http://localhost:8080/hi/del?id=" + id)  
    .then(response => {  
      console.log(response);  
  
      const data = this.state.data.filter(item => item.id !== id);  
      this.setState({ data });  
    })  
  
} 

  render() {
    return (
      <>
      
      <Link to="/signup">Add</Link>
      <table border={1}>
      <thead>
        <tr>
    
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
          <th>Pass</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.id}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>  
                    <button className="btn btn-danger" onClick={(e) => this.deleteData(user.id, e)}>Delete</button>  
            </td>  
          </tr>
        ))}
      </tbody>
    </table>
    
    </>
    );
  }
}

export default View;


  
  


