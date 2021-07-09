import React from 'react';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      registerEmail : '',
      regiterName : '',
      registerAddress: '',
      registerContact: ''
    }
  }
  onEmailChange = (event) => {
    this.setState({registerEmail:event.target.value})
  }

  onNameChange = (event) => {
    this.setState({registerName:event.target.value})
  }

  onAddressChange = (event) => {
    this.setState({registerAddress:event.target.value})
  }

  onContactChange = (event) => {
    this.setState({registerContact:event.target.value})
  }

  onSubmit = () =>{
    console.log("entering")
    fetch('http://localhost:3001/register',{
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
      name: this.state.registerName,
      email:this.state.registerEmail,
      address:this.state.registerAddress,
      contact:this.state.registerContact
      })
    })
    .then((response) => response.json())
    .then((user) =>{
        if(user) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }

  render(){
    return(
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange = {this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange = {this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="address">Address</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="address"
                  id="address"
                  onChange = {this.onAddressChange}
                />
              </div> 
              <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="contact">Contact</label>
              <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="contact"
                  id="contact"
                  onChange = {this.onContactChange}
                />
              </div>

            </fieldset>
            <div className="">
              <input
                onClick = {this.onSubmit}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value= "Submit"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
	
} 

export default Form;