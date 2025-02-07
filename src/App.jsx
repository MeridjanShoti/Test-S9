import "./App.css";
import Settings from "./components/Settings.jsx";
import MyNavBar from "../src/components/MyNavBar.jsx";
import MyFooter from "./components/MyFooter.jsx";
import MyMain from "./components/MyMain.jsx";
import Account from "./components/Account.jsx";
import { Component } from "react";
class App extends Component {
  state = {
    currentPage: "home",
  };
  changeState = (newpage) => {
    this.setState({ currentPage: newpage });
  };
  render() {
    {
      if (this.state.currentPage === "home") {
        return (
          <>
            <div style={{ minHeight: "100vh" }} className="d-flex flex-column bg-dark">
              <MyNavBar changeState={this.changeState} />
              <MyMain />
              <MyFooter />
            </div>
          </>
        );
      } else if (this.state.currentPage === "account") {
        return (
          <>
            <div style={{ minHeight: "100vh" }} className="d-flex flex-column bg-dark">
              <Account changeState={this.changeState} />
            </div>
          </>
        );
      } else if (this.state.currentPage === "settings") {
        return (
          <div>
            <MyNavBar changeState={this.changeState} />
            <Settings />
          </div>
        );
      } else {
        return (
          <>
            <div style={{ minHeight: "100vh" }} className="d-flex flex-column bg-danger">
              <h1>OH OH, DOVE SEI FINITO?</h1>
            </div>
          </>
        );
      }
    }
  }
}

export default App;
