import Navigator from "./components/navigator/Navigator"
import Mainpage from "./components/mainpage/Mainpage"
import Portfolio from "./components/Portfolio/Portfolio"
import Bookshelf from "./components/bookshelf/Bookshelf"
import About from "./components/about/About"
import "./app.css"
import React from 'react';

function App() {
  const [screen, setScreens]=React.useState("home");
  
  return (
    <div className="app">
      <Navigator screen={screen} setScreens={setScreens}/>
      <Mainpage screen={screen}/>
      <Portfolio screen={screen}/>
      <About screen={screen}/>
      <Bookshelf screen={screen}/>
    </div>
  );
}

export default App;
