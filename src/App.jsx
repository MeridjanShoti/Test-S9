import "./App.css";
import MyNavBar from "../src/components/MyNavBar.jsx";
import MyFooter from "./components/MyFooter.jsx";
import MyMain from "./components/MyMain.jsx";
function App() {
  return (
    <div style={{ minHeight: "100vh" }} className="d-flex flex-column bg-dark">
      <MyNavBar />
      <MyMain />
      <MyFooter />
    </div>
  );
}

export default App;
