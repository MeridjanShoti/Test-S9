import "./App.css";
import MyNavBar from "../src/components/MyNavBar.jsx";
import MyFooter from "./components/MyFooter.jsx";
import MyMain from "./components/MyMain.jsx";
import Account from "./components/Account.jsx";
import { Component } from "react";
//commento e decommento le pagine per farle vedere singolarmente perchè non credo di avere il tempo di collegarle
class App extends Component {
  state = {
    currentPage: "home",
  };

  render() {
    {
      if (this.state.currentPage === "home") {
        return (
          <>
            <div style={{ minHeight: "100vh" }} className="d-flex flex-column bg-dark">
              <MyNavBar />
              <MyMain />
              <MyFooter />
            </div>
          </>
        );
      } else {
        return (
          <>
            <div style={{ minHeight: "100vh" }} className="d-flex flex-column bg-dark">
              <Account />
            </div>
          </>
        );
      }
    }
  }
}

export default App;
