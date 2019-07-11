import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import cookie from 'react-cookies';
import './App.css';

class Login extends Component {

  constructor(props) {
    super(props);

    this.login = this.login.bind(this);

  }

  componentDidMount() {
    if (cookie.load("username"))
      document.getElementById("username").value = cookie.load("username");
  }

  login() {    
    if (document.getElementById("username").value === "")
      return;
    console.log("i gonna log you in a sec, ", document.getElementById("username").value);
    cookie.save("username", document.getElementById("username").value);
    this.props.history.push("/progress");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Username
          <input placeholder="Enter your username" id="username" />
          <br/>
          <u>
            <a
              className="App-link"
              onClick={this.login}
              rel="noopener noreferrer"
              style={{cursor: 'pointer'}}
            >
              Login
            </a>
          </u>
        </header>
      </div>
    );
  }
  
}

export default withRouter(Login);
