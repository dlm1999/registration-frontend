import React, { Component } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Success from './components/Success/Success';

class App extends Component{
  constructor(){
    super();
    this.state = {
      route: 'Form',
      user: {
        id: '',
        name: '',
        email: '',
        address:'',
        contact: ''
      } 
    }
  }

  loadUser = (data) =>{
    this.setState({user:{
      id:data.id,
      name:data.name,
      email:data.email,
      address:data.address,
      contact:data.contact
    }})
  }

  onRouteChange = (route) =>{
    this.setState({route: route});
  }
  render(){
    return (
    <div className="App">
    {this.state.route === 'Form'
      ? <Form loadUser = {this.loadUser} onRouteChange = {this.onRouteChange}/>
      :<div>
          <Success onRouteChange = {this.onRouteChange}/>
      </div>
     }   
    </div>
    );
  }
  
}

export default App;
