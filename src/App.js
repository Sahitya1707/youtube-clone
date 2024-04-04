import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import Header from "./components/Header";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
