import Navigator from "./components/navigator/Navigator"
import Mainpage from "./components/mainpage/Mainpage"
import Portfolio from "./components/Portfolio/Portfolio"
import "./app.css"
import React from 'react';


function App() {
  const screens = ["home", "portfolio", "bookshelf", "about"];
  const [screen, setScreens]=React.useState(screens)

  return (
    <div className="app">
      <Navigator screen={screen} setScreens={setScreens}/>
      <Mainpage screen={screen}/>
      <Portfolio screen={screen}/>

    </div>
  );
}

export default App;
