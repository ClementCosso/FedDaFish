import React, { Component } from "react";
import "./App.css";
import { Switch, NavLink, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Login from "./components/user-pages/Login";
import ConnectedNav from "./components/util/connectedNav";
import Dashboard from "./components/pages/dashboard";
import Teams from "./components/pages/teams";
import NewUser from "./components/pages/newuser";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/checkuser", { withCredentials: true })
      .then(responseFromBackend => {
        // console.log("Check User in APP.JS: ",responseFromBackend.data)
        const { userDoc } = responseFromBackend.data;
        this.syncCurrentUser(userDoc);
      });
  }

  // this is the method for updating "currentUser"
  // (must be defined in App.js since it's the owner of "currentUser" now)
  syncCurrentUser(user) {
    this.setState({ currentUser: user });
    console.log("current user", this.state.currentUser);
  }

  isAuthenticated(component) {
    return this.state.currentUser ? component : <Redirect to="/" />;
  }
  isNotAuthenticated(component) {
    return !this.state.currentUser ? component : <Redirect to="/dashboard" />;
  }

  render() {
    console.log(this.state.currentUser);
    return (
      <div className="App">
        {this.state.currentUser ? (
          <header>
            <ConnectedNav
              currentUser={this.state.currentUser}
              onUserChange={userDoc => this.syncCurrentUser(userDoc)}
            />
          </header>
        ) : (
          <header></header>
        )}

        <Switch>
          {/* this is example how to normally do the Route: */}
          {/* <Route path="/somePage" component={ someComponentThatWillRenderWhenUSerClickThisLink }   /> */}
          <Route
            exact
            path="/dashboard"
            render={() => this.isAuthenticated(<Dashboard />)}
          />
          <Route
            exact
            path="/teams"
            render={() => this.isAuthenticated(<Teams />)}
          />
          <Route
            exact
            path="/teams/new"
            render={() => this.isAuthenticated(<NewUser />)}
          />

          <Route
            exact
            path="/"
            render={() =>
              this.isNotAuthenticated(
                <Login
                  currentUser={this.state.currentUser}
                  onUserChange={userDoc => this.syncCurrentUser(userDoc)}
                />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
