import React, { Component } from "react";
import axios from "axios";
export const AuthContext = React.createContext();

class AuthProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: localStorage.getItem("Token") === null ? false : true,
      token: "" || localStorage.getItem("Token"),
      baseurl: process.env.AWS_BASE_URL,
      username: "" || localStorage.getItem("Username")
    };
  }

  logIn = (username, password) => {
    const userData = { username, password };
    console.log(userData)
    return axios
      .post("http://localhost:8080/login", userData)
      .then(res => {
        console.log("REDIRECT");
        console.log(res.headers.authorization);
        localStorage.setItem("Token", res.headers.authorization)
        localStorage.setItem("Username", username)
        this.setState({
          isLoggedIn: true,
          token: res.headers.authorization,
          username: username
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
      token: "", 
      username: ""
    });
  };

  signUp = (userdata) => {
    console.log(userdata)
    const email = userdata.email
    const username = userdata.username
    const password = userdata.password
    const sendData = {email, username, password}
    return axios.post("http://localhost:8080/api/users/sign-up", sendData)
      .then(res => {
        return res
      })
      .catch(err => {
        console.log(err.response)
        throw new Error(err.response.data)
      })
      
      
  }

  getData = (params) => {
    return axios
      .get("http://localhost:8080/api/" + params, {
        headers: {
          authorization: this.state.token
        }
      })
      .then(res => {
        console.log(res.data)
        return res.data
      }).catch(err => {
        console.log(err)
        throw new Error(err.response.data)
      })
  }

  postData = (params, data) => {
    return axios.post("http://localhost:8080/api/" + params, data, {
      headers: {
        authorization: this.state.token
      }
    }).then(res => {
      console.log(res.data)
      return res.data
    }).catch(err => {
      console.log(err)
      throw new Error(err.response.data)
    })
  }

  updateData = (id, params) => {
    return axios.put("http://localhost:8080/api/plans/" + id, params, {
      headers: {
        authorization: this.state.token
      }
    }).then(res => {
      console.log(res.data);
      return res.data
    }).catch(err => {
      return err
    })
  };

  //lisäys 26.08.2019 klo20:45
  getById = (id) => {
    return axios.get('http://localhost:8080/api/' + id)
        .then((response) => response)
        .catch(err => {
          return err
        })
  };

  deletePlan = (id) => {
    return axios.delete('http://localhost:8080/api/plans/' +id,{
      headers: {
        authorization: this.state.token
      }})
  };

  addReferencepictures = (id, params) => {
      return axios.put("http://localhost:8080/api/plans/" + id + "/pictures", params, {
          headers: {
              authorization: this.state.token
          }
      }).then(res => {
          console.log(res.data);
          return res.data
      }).catch(err => {
          return err
      })
  };



  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          logIn: this.logIn,
          logOut: this.logOut,
          getData: this.getData,
          signUp: this.signUp,
          postData: this.postData,
          username: this.state.username,
          updateData: this.updateData,
          deletePlan: this.deletePlan,
            addReferencePictures: this.addReferencepictures,
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
