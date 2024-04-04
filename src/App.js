import "./App.css";
import Body from "./components/Body";
// import { Provider } from "react-redux";
import Header from "./components/Header";

function App() {
  return (
    // <Provider>
      <div className="App">
        <Header />
        <Body />
        {/**
       * Head
       * Body
       *  Sidebar
       *    MenuItems
       * MainContainer
       * ButtonList
       * videocantainer
       * videoCard

       */}
      </div>
    // </Provider>
  );
}

export default App;
