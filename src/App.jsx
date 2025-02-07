import "./App.css";
import MyNavBar from "../src/components/MyNavBar.jsx";
import MyFooter from "./components/MyFooter.jsx";
import MyMain from "./components/MyMain.jsx";
import Account from "./components/Account.jsx";
//commento e decommento le pagine per farle vedere singolarmente perchè non credo di avere il tempo di collegarle
function App() {
  return (
    <>
      {/* <div style={{ minHeight: "100vh" }} className="d-flex flex-column bg-dark">
      <MyNavBar />
      <MyMain />
      <MyFooter />
      
    </div> */}

      <div style={{ minHeight: "100vh" }} className="d-flex flex-column">
        <Account />
      </div>
    </>
  );
}

export default App;
