import React, { Component } from "react";
import axios from "axios";
export const AuthContext = React.createContext();

class AuthProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: localStorage.getItem("Token") === null ? false : true,
      token: "" || localStorage.getItem("Token")
    };
  }

  logIn = (username, password) => {
    const userData = { username, password };
    return axios
      .post("http://localhost:8080/login", userData)
      .then(res => {
        console.log("REDIRECT");
        console.log(res.headers.authorization);
        localStorage.setItem("Token", res.headers.authorization)
        this.setState({
          isLoggedIn: true,
          token: res.headers.authorization
        });
      })
      .catch(err => {
       return err
      });
  };

  logOut = () => {
    localStorage.removeItem("Token")
    this.setState({
      isLoggedIn: false,
      token: ""
    });
  };

  signUp = (userdata) => {
    console.log(userdata)
    const email = userdata.email
    const username = userdata.username
    const password = userdata.password
    const sendData = {email, username, password}
    axios.post("http://localhost:8080/api/users/sign-up", sendData)
    .then(this.logIn(username, password))
  }

  getData = (params) => {
    return axios
      .get("http://localhost:8080/api/" + params, {
        headers: {
          authorization: this.state.token
        }
      })
      .then(res => {
        return res.data
        console.log(res)
      }).catch(err => {
        console.log(err)
        return err
      })
  }

  postData = (params) => {
    return axios.post("http://localhost:8080/api/" + params, {
      headers: {
        authorization: this.state.token
      }
    }).then(res => {
      console.log(res.data)
      return res.data
    }).catch(err => {
      return err
    })
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          logIn: this.logIn,
          logOut: this.logOut,
          getData: this.getData,
          signUp: this.signUp,
          AuthContext
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export const Consumer = AuthContext.Consumer;
export const Provider = AuthProvider;
